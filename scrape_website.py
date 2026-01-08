#!/usr/bin/env python3
"""
Web Scraper for ibogalifechange.com
Extracts all content, pages, and media for brand analysis
"""

import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import json
import os
import time
from datetime import datetime

class IbogaLifeChangeScraper:
    def __init__(self, base_url="https://ibogalifechange.com"):
        self.base_url = base_url
        self.visited_urls = set()
        self.pages_content = {}
        self.images = []
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
        })
        
    def get_page(self, url):
        """Fetch a single page"""
        try:
            response = self.session.get(url, timeout=30)
            response.raise_for_status()
            return response.text
        except requests.RequestException as e:
            print(f"Error fetching {url}: {e}")
            return None
    
    def extract_page_content(self, html, url):
        """Extract structured content from a page"""
        soup = BeautifulSoup(html, 'html.parser')
        
        # Remove script and style elements
        for script in soup(["script", "style", "noscript"]):
            script.decompose()
        
        content = {
            "url": url,
            "title": "",
            "meta_description": "",
            "headings": [],
            "paragraphs": [],
            "images": [],
            "links": [],
            "sections": [],
            "raw_text": ""
        }
        
        # Title
        title_tag = soup.find('title')
        content["title"] = title_tag.get_text(strip=True) if title_tag else ""
        
        # Meta description
        meta_desc = soup.find('meta', attrs={'name': 'description'})
        if meta_desc:
            content["meta_description"] = meta_desc.get('content', '')
        
        # OG tags
        og_tags = {}
        for og in soup.find_all('meta', property=lambda x: x and x.startswith('og:')):
            og_tags[og.get('property')] = og.get('content', '')
        content["og_tags"] = og_tags
        
        # Headings
        for level in range(1, 7):
            for heading in soup.find_all(f'h{level}'):
                text = heading.get_text(strip=True)
                if text:
                    content["headings"].append({
                        "level": level,
                        "text": text
                    })
        
        # Main content areas - try common content containers
        main_content = None
        for selector in ['main', 'article', '.content', '#content', '.main-content', '.page-content', '[role="main"]']:
            main_content = soup.select_one(selector)
            if main_content:
                break
        
        if not main_content:
            main_content = soup.find('body')
        
        if main_content:
            # Paragraphs
            for p in main_content.find_all('p'):
                text = p.get_text(strip=True)
                if text and len(text) > 20:  # Filter out short/empty paragraphs
                    content["paragraphs"].append(text)
            
            # List items
            for li in main_content.find_all('li'):
                text = li.get_text(strip=True)
                if text and len(text) > 10:
                    content["paragraphs"].append(f"• {text}")
            
            # Blockquotes / Testimonials
            for quote in main_content.find_all(['blockquote', '.testimonial', '.quote']):
                text = quote.get_text(strip=True)
                if text:
                    content["paragraphs"].append(f'"{text}"')
        
        # Images
        for img in soup.find_all('img'):
            src = img.get('src', '')
            if src:
                full_url = urljoin(url, src)
                content["images"].append({
                    "src": full_url,
                    "alt": img.get('alt', ''),
                    "title": img.get('title', '')
                })
                if full_url not in [i['src'] for i in self.images]:
                    self.images.append({
                        "src": full_url,
                        "alt": img.get('alt', ''),
                        "page": url
                    })
        
        # Internal links for crawling
        for a in soup.find_all('a', href=True):
            href = a.get('href')
            full_url = urljoin(url, href)
            parsed = urlparse(full_url)
            
            # Only include internal links
            if self.base_url in full_url or parsed.netloc == '':
                content["links"].append({
                    "url": full_url,
                    "text": a.get_text(strip=True)
                })
        
        # Extract sections by headers
        if main_content:
            current_section = {"heading": "Introduction", "content": []}
            for element in main_content.find_all(['h1', 'h2', 'h3', 'h4', 'p', 'li', 'blockquote']):
                if element.name.startswith('h'):
                    if current_section["content"]:
                        content["sections"].append(current_section)
                    current_section = {
                        "heading": element.get_text(strip=True),
                        "level": int(element.name[1]),
                        "content": []
                    }
                else:
                    text = element.get_text(strip=True)
                    if text and len(text) > 10:
                        current_section["content"].append(text)
            
            if current_section["content"]:
                content["sections"].append(current_section)
        
        # Raw text for analysis
        content["raw_text"] = soup.get_text(separator='\n', strip=True)
        
        return content
    
    def find_all_pages(self, html, base_url):
        """Find all internal page links"""
        soup = BeautifulSoup(html, 'html.parser')
        pages = set()
        
        for a in soup.find_all('a', href=True):
            href = a.get('href')
            full_url = urljoin(base_url, href)
            parsed = urlparse(full_url)
            
            # Filter internal links only
            if urlparse(self.base_url).netloc == parsed.netloc:
                # Clean URL (remove fragments and query strings for deduplication)
                clean_url = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
                if clean_url.endswith('/'):
                    clean_url = clean_url[:-1]
                if clean_url and clean_url not in self.visited_urls:
                    pages.add(clean_url)
        
        return pages
    
    def crawl(self, max_pages=50):
        """Crawl the entire website"""
        print(f"\n{'='*60}")
        print(f"Starting crawl of {self.base_url}")
        print(f"{'='*60}\n")
        
        to_visit = {self.base_url}
        
        while to_visit and len(self.visited_urls) < max_pages:
            url = to_visit.pop()
            
            if url in self.visited_urls:
                continue
            
            print(f"[{len(self.visited_urls) + 1}/{max_pages}] Scraping: {url}")
            
            html = self.get_page(url)
            if html:
                self.visited_urls.add(url)
                
                # Extract content
                content = self.extract_page_content(html, url)
                self.pages_content[url] = content
                
                # Find more pages
                new_pages = self.find_all_pages(html, url)
                to_visit.update(new_pages - self.visited_urls)
                
                # Be polite
                time.sleep(0.5)
            else:
                print(f"  ⚠️  Failed to fetch: {url}")
        
        print(f"\n{'='*60}")
        print(f"Crawl complete! Scraped {len(self.visited_urls)} pages")
        print(f"{'='*60}\n")
    
    def generate_brand_analysis(self):
        """Generate brand analysis from scraped content"""
        analysis = {
            "brand_name": "Iboga Life Change",
            "website": self.base_url,
            "scraped_at": datetime.now().isoformat(),
            "total_pages": len(self.pages_content),
            "total_images": len(self.images),
            "pages": [],
            "all_headings": [],
            "key_themes": [],
            "testimonials": [],
            "services": [],
            "about_content": [],
            "contact_info": {}
        }
        
        for url, content in self.pages_content.items():
            page_summary = {
                "url": url,
                "title": content.get("title", ""),
                "meta_description": content.get("meta_description", ""),
                "headings": content.get("headings", []),
                "sections": content.get("sections", []),
                "image_count": len(content.get("images", []))
            }
            analysis["pages"].append(page_summary)
            
            # Collect all headings
            for h in content.get("headings", []):
                if h not in analysis["all_headings"]:
                    analysis["all_headings"].append(h)
            
            # Look for testimonials
            for p in content.get("paragraphs", []):
                if p.startswith('"') or "testimonial" in url.lower() or "review" in url.lower():
                    analysis["testimonials"].append({"text": p, "source": url})
            
            # Look for about content
            if "about" in url.lower() or "story" in url.lower() or "jay" in url.lower():
                analysis["about_content"].extend(content.get("paragraphs", []))
        
        return analysis
    
    def save_results(self, output_dir="."):
        """Save all scraped data"""
        os.makedirs(output_dir, exist_ok=True)
        
        # Save raw content
        with open(os.path.join(output_dir, "scraped_content.json"), "w") as f:
            json.dump(self.pages_content, f, indent=2)
        print(f"✓ Saved raw content to scraped_content.json")
        
        # Save brand analysis
        analysis = self.generate_brand_analysis()
        with open(os.path.join(output_dir, "brand_analysis.json"), "w") as f:
            json.dump(analysis, f, indent=2)
        print(f"✓ Saved brand analysis to brand_analysis.json")
        
        # Save images list
        with open(os.path.join(output_dir, "images.json"), "w") as f:
            json.dump(self.images, f, indent=2)
        print(f"✓ Saved images list to images.json")
        
        # Generate markdown summary
        self.generate_markdown_summary(output_dir, analysis)
        
        return analysis
    
    def generate_markdown_summary(self, output_dir, analysis):
        """Generate a readable markdown summary"""
        md = f"""# Iboga Life Change - Website Content Analysis

**Website:** {self.base_url}
**Scraped:** {analysis['scraped_at']}
**Pages Found:** {analysis['total_pages']}
**Images Found:** {analysis['total_images']}

---

## Site Structure

"""
        # Pages
        for page in analysis["pages"]:
            md += f"### {page['title'] or page['url']}\n"
            md += f"**URL:** {page['url']}\n"
            if page['meta_description']:
                md += f"**Description:** {page['meta_description']}\n"
            md += "\n"
            
            if page['sections']:
                md += "**Content Sections:**\n"
                for section in page['sections'][:5]:  # Limit sections shown
                    md += f"- {section.get('heading', 'Untitled')}\n"
                    for content in section.get('content', [])[:2]:  # Show first 2 paragraphs
                        md += f"  > {content[:200]}{'...' if len(content) > 200 else ''}\n"
                md += "\n"
        
        # About/Story Content
        if analysis["about_content"]:
            md += "---\n\n## About / Story Content\n\n"
            for content in analysis["about_content"][:20]:
                md += f"> {content}\n\n"
        
        # Testimonials
        if analysis["testimonials"]:
            md += "---\n\n## Testimonials Found\n\n"
            for t in analysis["testimonials"][:10]:
                md += f"> {t['text'][:300]}{'...' if len(t['text']) > 300 else ''}\n"
                md += f"*Source: {t['source']}*\n\n"
        
        # All Headings
        md += "---\n\n## All Page Headings\n\n"
        for h in analysis["all_headings"]:
            md += f"{'#' * h['level']} {h['text']}\n"
        
        with open(os.path.join(output_dir, "content_summary.md"), "w") as f:
            f.write(md)
        print(f"✓ Saved markdown summary to content_summary.md")


def main():
    print("""
╔══════════════════════════════════════════════════════════════╗
║         IBOGA LIFE CHANGE - WEBSITE SCRAPER                  ║
║         Extracting content for brand analysis                ║
╚══════════════════════════════════════════════════════════════╝
    """)
    
    scraper = IbogaLifeChangeScraper("https://ibogalifechange.com")
    
    # Crawl the website
    scraper.crawl(max_pages=30)
    
    # Save results
    output_dir = os.path.dirname(os.path.abspath(__file__))
    analysis = scraper.save_results(output_dir)
    
    print(f"""
╔══════════════════════════════════════════════════════════════╗
║                     SCRAPING COMPLETE                        ║
╠══════════════════════════════════════════════════════════════╣
║  Pages scraped: {analysis['total_pages']:<42} ║
║  Images found:  {analysis['total_images']:<42} ║
║  Output dir:    {output_dir[:42]:<42} ║
╚══════════════════════════════════════════════════════════════╝

Files created:
  • scraped_content.json  - Raw page content
  • brand_analysis.json   - Structured analysis
  • images.json           - All images found
  • content_summary.md    - Readable summary

Next: Review content_summary.md to understand Jay's story and brand.
    """)


if __name__ == "__main__":
    main()

