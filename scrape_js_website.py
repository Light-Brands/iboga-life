#!/usr/bin/env python3
"""
JavaScript-Rendering Web Scraper for ibogalifechange.com
Uses Playwright to render React/JavaScript content
"""

import json
import os
import time
from datetime import datetime
from urllib.parse import urljoin, urlparse

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("Installing playwright...")
    os.system("pip3 install playwright && playwright install chromium")
    from playwright.sync_api import sync_playwright


class IbogaJSScraper:
    def __init__(self, base_url="https://ibogalifechange.com"):
        self.base_url = base_url
        self.visited_urls = set()
        self.pages_content = {}
        self.images = []
        
    def scrape_page(self, page, url):
        """Scrape a single page after JS rendering"""
        print(f"  → Navigating to: {url}")
        
        try:
            page.goto(url, wait_until="networkidle", timeout=30000)
            page.wait_for_timeout(2000)  # Extra time for animations
        except Exception as e:
            print(f"  ⚠️ Error loading page: {e}")
            return None
        
        content = {
            "url": url,
            "title": page.title(),
            "headings": [],
            "paragraphs": [],
            "images": [],
            "links": [],
            "sections": [],
            "raw_text": ""
        }
        
        # Get all text content
        try:
            content["raw_text"] = page.inner_text("body")
        except:
            content["raw_text"] = ""
        
        # Headings
        for level in range(1, 7):
            headings = page.query_selector_all(f"h{level}")
            for h in headings:
                try:
                    text = h.inner_text().strip()
                    if text:
                        content["headings"].append({"level": level, "text": text})
                except:
                    pass
        
        # Paragraphs
        paragraphs = page.query_selector_all("p")
        for p in paragraphs:
            try:
                text = p.inner_text().strip()
                if text and len(text) > 15:
                    content["paragraphs"].append(text)
            except:
                pass
        
        # List items
        list_items = page.query_selector_all("li")
        for li in list_items:
            try:
                text = li.inner_text().strip()
                if text and len(text) > 10:
                    content["paragraphs"].append(f"• {text}")
            except:
                pass
        
        # Divs with substantial text (for React components)
        divs = page.query_selector_all("div")
        for div in divs:
            try:
                # Only get direct text, not nested
                text = div.evaluate("el => Array.from(el.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join(' ').trim()")
                if text and len(text) > 50:
                    content["paragraphs"].append(text)
            except:
                pass
        
        # Spans with substantial text
        spans = page.query_selector_all("span")
        for span in spans:
            try:
                text = span.inner_text().strip()
                if text and len(text) > 30 and text not in content["paragraphs"]:
                    content["paragraphs"].append(text)
            except:
                pass
        
        # Images
        images = page.query_selector_all("img")
        for img in images:
            try:
                src = img.get_attribute("src")
                if src:
                    full_src = urljoin(url, src)
                    content["images"].append({
                        "src": full_src,
                        "alt": img.get_attribute("alt") or "",
                        "title": img.get_attribute("title") or ""
                    })
            except:
                pass
        
        # Background images in style
        elements_with_bg = page.query_selector_all("[style*='background']")
        for el in elements_with_bg:
            try:
                style = el.get_attribute("style")
                if "url(" in style:
                    # Extract URL from background-image
                    import re
                    urls = re.findall(r'url\(["\']?([^"\'()]+)["\']?\)', style)
                    for u in urls:
                        full_src = urljoin(url, u)
                        content["images"].append({
                            "src": full_src,
                            "alt": "background-image",
                            "title": ""
                        })
            except:
                pass
        
        # Links
        links = page.query_selector_all("a")
        for a in links:
            try:
                href = a.get_attribute("href")
                if href:
                    full_url = urljoin(url, href)
                    parsed = urlparse(full_url)
                    base_parsed = urlparse(self.base_url)
                    
                    if parsed.netloc == base_parsed.netloc or parsed.netloc == "":
                        content["links"].append({
                            "url": full_url,
                            "text": a.inner_text().strip()
                        })
            except:
                pass
        
        # Sections - try to identify content blocks
        sections = page.query_selector_all("section, [class*='section'], [class*='Section']")
        for section in sections:
            try:
                section_data = {
                    "heading": "",
                    "content": []
                }
                
                # Find heading in section
                heading = section.query_selector("h1, h2, h3, h4")
                if heading:
                    section_data["heading"] = heading.inner_text().strip()
                
                # Get section text
                text = section.inner_text().strip()
                if text:
                    section_data["content"] = [line.strip() for line in text.split('\n') if line.strip() and len(line.strip()) > 20]
                
                if section_data["content"]:
                    content["sections"].append(section_data)
            except:
                pass
        
        return content
    
    def find_internal_links(self, content):
        """Extract internal links for crawling"""
        links = set()
        for link in content.get("links", []):
            url = link.get("url", "")
            if url and self.base_url in url:
                # Clean the URL
                parsed = urlparse(url)
                clean_url = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
                if clean_url.endswith("/"):
                    clean_url = clean_url[:-1]
                if clean_url and clean_url not in self.visited_urls:
                    links.add(clean_url)
        return links
    
    def crawl(self, max_pages=30):
        """Crawl the website with JS rendering"""
        print(f"\n{'='*60}")
        print(f"Starting JS-rendered crawl of {self.base_url}")
        print(f"{'='*60}\n")
        
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            context = browser.new_context(
                viewport={"width": 1920, "height": 1080},
                user_agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"
            )
            page = context.new_page()
            
            to_visit = {self.base_url}
            
            while to_visit and len(self.visited_urls) < max_pages:
                url = to_visit.pop()
                
                if url in self.visited_urls:
                    continue
                
                print(f"[{len(self.visited_urls) + 1}/{max_pages}] Scraping: {url}")
                
                content = self.scrape_page(page, url)
                if content:
                    self.visited_urls.add(url)
                    self.pages_content[url] = content
                    
                    # Collect images
                    for img in content.get("images", []):
                        if img not in self.images:
                            self.images.append(img)
                    
                    # Find more pages to crawl
                    new_links = self.find_internal_links(content)
                    to_visit.update(new_links - self.visited_urls)
                    
                    print(f"  ✓ Found {len(content['paragraphs'])} paragraphs, {len(content['images'])} images")
                    print(f"  ✓ Discovered {len(new_links)} new links")
                
                time.sleep(1)  # Be polite
            
            browser.close()
        
        print(f"\n{'='*60}")
        print(f"Crawl complete! Scraped {len(self.visited_urls)} pages")
        print(f"{'='*60}\n")
    
    def save_results(self, output_dir="."):
        """Save all scraped data"""
        os.makedirs(output_dir, exist_ok=True)
        
        # Save raw content
        with open(os.path.join(output_dir, "scraped_content.json"), "w") as f:
            json.dump(self.pages_content, f, indent=2)
        print(f"✓ Saved raw content to scraped_content.json")
        
        # Save images
        with open(os.path.join(output_dir, "images.json"), "w") as f:
            json.dump(self.images, f, indent=2)
        print(f"✓ Saved images list to images.json")
        
        # Generate comprehensive markdown
        self.generate_comprehensive_summary(output_dir)
        
        return {
            "total_pages": len(self.pages_content),
            "total_images": len(self.images)
        }
    
    def generate_comprehensive_summary(self, output_dir):
        """Generate detailed markdown summary"""
        md = f"""# 🌿 Iboga Life Change - Complete Website Analysis

**Website:** {self.base_url}  
**Scraped:** {datetime.now().strftime('%Y-%m-%d %H:%M')}  
**Pages Found:** {len(self.pages_content)}  
**Images Found:** {len(self.images)}

---

## 📑 Complete Site Content

"""
        
        for url, content in self.pages_content.items():
            # Page header
            page_name = url.replace(self.base_url, "").strip("/") or "Home"
            md += f"### 📄 {content.get('title', page_name)}\n"
            md += f"**URL:** `{url}`\n\n"
            
            # Headings
            if content.get("headings"):
                md += "**Headings:**\n"
                for h in content["headings"]:
                    md += f"{'  ' * (h['level']-1)}- {h['text']}\n"
                md += "\n"
            
            # Full content
            if content.get("paragraphs"):
                md += "**Content:**\n\n"
                seen = set()
                for p in content["paragraphs"]:
                    # Deduplicate
                    p_clean = p.strip()
                    if p_clean and p_clean not in seen and len(p_clean) > 20:
                        seen.add(p_clean)
                        md += f"> {p_clean}\n\n"
            
            # Sections
            if content.get("sections"):
                md += "**Sections:**\n\n"
                for section in content["sections"]:
                    if section.get("heading"):
                        md += f"#### {section['heading']}\n"
                    for c in section.get("content", [])[:10]:
                        md += f"{c}\n\n"
            
            # Images
            if content.get("images"):
                md += f"**Images ({len(content['images'])}):**\n"
                for img in content["images"][:10]:
                    md += f"- `{img['src']}` - {img.get('alt', 'no alt')}\n"
                md += "\n"
            
            md += "\n---\n\n"
        
        # Raw text dump
        md += "## 📝 Raw Text Content\n\n"
        for url, content in self.pages_content.items():
            page_name = url.replace(self.base_url, "").strip("/") or "Home"
            md += f"### {page_name}\n\n"
            md += "```\n"
            md += content.get("raw_text", "")[:5000]
            md += "\n```\n\n"
        
        # All images
        md += "## 🖼️ All Images\n\n"
        for img in self.images:
            md += f"- {img.get('src', '')} ({img.get('alt', 'no alt')})\n"
        
        with open(os.path.join(output_dir, "content_summary.md"), "w") as f:
            f.write(md)
        print(f"✓ Saved comprehensive summary to content_summary.md")


def main():
    print("""
╔══════════════════════════════════════════════════════════════╗
║     IBOGA LIFE CHANGE - JS RENDERING WEB SCRAPER            ║
║     Using Playwright for full React content extraction       ║
╚══════════════════════════════════════════════════════════════╝
    """)
    
    scraper = IbogaJSScraper("https://ibogalifechange.com")
    
    # Crawl with JS rendering
    scraper.crawl(max_pages=20)
    
    # Save results
    output_dir = os.path.dirname(os.path.abspath(__file__))
    stats = scraper.save_results(output_dir)
    
    print(f"""
╔══════════════════════════════════════════════════════════════╗
║                     SCRAPING COMPLETE                        ║
╠══════════════════════════════════════════════════════════════╣
║  Pages scraped: {stats['total_pages']:<42} ║
║  Images found:  {stats['total_images']:<42} ║
╚══════════════════════════════════════════════════════════════╝

Files created:
  • scraped_content.json  - Full page content with JS rendered
  • images.json           - All images found
  • content_summary.md    - Complete readable summary

Review content_summary.md for Jay's story and brand analysis.
    """)


if __name__ == "__main__":
    main()

