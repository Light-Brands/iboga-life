/**
 * Generate Spiritual Placeholder Portraits for Iboga Life Change
 * Replaces AI-generated faces with abstract spiritual symbols
 * 
 * Usage: npx tsx scripts/generate-portrait-placeholders.ts
 */

import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

// Load .env file if it exists
function loadEnvFile() {
  const envPaths = [
    path.join(process.cwd(), '.env'),
    path.join(process.cwd(), '.env.local'),
    path.join(process.cwd(), '..', '.env'),
    path.join(process.cwd(), '..', '.env.local'),
  ];
  
  for (const envPath of envPaths) {
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf-8');
      const lines = content.split('\n');
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
          const [key, ...valueParts] = trimmed.split('=');
          const value = valueParts.join('=').replace(/^["']|["']$/g, '');
          if (key && value && !process.env[key]) {
            process.env[key] = value;
          }
        }
      }
      console.log(`📄 Loaded environment from: ${envPath}\n`);
      return true;
    }
  }
  return false;
}

loadEnvFile();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface ImageConfig {
  filename: string;
  outputPath: string;
  prompt: string;
  size: '1024x1024' | '1792x1024' | '1024x1792';
  quality: 'standard' | 'hd';
  style: 'natural' | 'vivid';
}

// Spiritual placeholder portraits
const PORTRAITS_TO_GENERATE: ImageConfig[] = [
  {
    filename: 'home-jay-portrait.jpg',
    outputPath: 'public/images',
    prompt: `Abstract spiritual portrait placeholder. A powerful silhouette of a warrior guardian standing before a sacred fire, backlit by golden flames (#C4963F). The figure is completely in shadow—no facial features visible—creating a mysterious, powerful presence. Arms slightly outstretched in a protective stance. Sacred golden light radiates behind the figure like an aura. Deep forest green (#1A2E1A) and earth brown (#2D2419) frame the composition. Fire sparks rise around the silhouette. The image suggests strength, protection, and spiritual power without showing a face. Circular composition suitable for avatar use. Mystical, powerful, reverent atmosphere.`,
    size: '1024x1024',
    quality: 'hd',
    style: 'vivid',
  },
  {
    filename: 'about-jay-formal.jpg',
    outputPath: 'public/images',
    prompt: `Abstract spiritual symbol representing a warrior healer. A sacred golden flame (#C4963F) in the shape of a human silhouette, burning bright against deep forest darkness (#1A2E1A). The flame-figure stands tall and strong, emanating warmth and protection. No facial features—purely the essence of fire taking human form. Ember particles float upward. Subtle Bwiti-inspired geometric patterns frame the image in earth tones (#2D2419). The composition suggests transformation, strength, and the eternal flame of healing. Circular composition suitable for portrait display. Sacred, powerful, abstract.`,
    size: '1024x1024',
    quality: 'hd',
    style: 'vivid',
  },
  {
    filename: 'about-moughenda-portrait.jpg',
    outputPath: 'public/images',
    prompt: `Abstract representation of ancient shamanic wisdom. An ancient tree with a face-like pattern naturally formed in its bark, eyes suggested by two glowing golden knots (#C4963F), wisdom radiating from the wood grain. The tree is sacred, ancient, covered in moss and symbols. Behind it, the African jungle fades into mist. Traditional Bwiti geometric patterns subtly overlay the bark. Deep greens (#1A2E1A, #4A6741), earth browns (#2D2419), and sacred gold highlights. The image represents 10 generations of ancestral wisdom without depicting a human face. Circular composition. Reverent, ancient, wise atmosphere.`,
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
  },
];

// Download image from URL
async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          downloadImage(redirectUrl, filepath).then(resolve).catch(reject);
          return;
        }
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

// Generate a single image (force regenerate)
async function generateImage(config: ImageConfig): Promise<boolean> {
  const outputDir = path.join(process.cwd(), config.outputPath);
  const outputFile = path.join(outputDir, config.filename);
  
  // Delete existing file if it exists
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
    console.log(`🗑️  Removed existing ${config.filename}`);
  }
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`🌿 Generating spiritual placeholder: ${config.filename}...`);
  
  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: config.prompt,
      n: 1,
      size: config.size,
      quality: config.quality,
      style: config.style,
      response_format: 'url',
    });
    
    const imageUrl = response.data[0]?.url;
    
    if (!imageUrl) {
      console.error(`❌ No URL returned for ${config.filename}`);
      return false;
    }
    
    await downloadImage(imageUrl, outputFile);
    console.log(`✅ Saved ${config.filename}`);
    return true;
    
  } catch (error: any) {
    console.error(`❌ Error generating ${config.filename}:`, error.message || error);
    return false;
  }
}

async function main(): Promise<void> {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('  🌿 Iboga Life Change - Spiritual Portrait Placeholders');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('  Replacing AI faces with spiritual symbols...');
  console.log('  These can be replaced with real photos later.\n');
  console.log('═══════════════════════════════════════════════════════════════\n');
  
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY environment variable is not set.');
    process.exit(1);
  }
  
  let successCount = 0;
  
  for (const config of PORTRAITS_TO_GENERATE) {
    const success = await generateImage(config);
    if (success) successCount++;
    await new Promise(resolve => setTimeout(resolve, 1500));
  }
  
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log(`  ✅ Generated ${successCount}/${PORTRAITS_TO_GENERATE.length} spiritual placeholders`);
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('  These images symbolically represent Jay and Moughenda');
  console.log('  without using AI-generated faces.');
  console.log('  Replace with actual photos when available.\n');
}

main().catch(console.error);

