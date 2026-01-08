/**
 * Image Generation Script for Iboga Life Change
 * Uses OpenAI DALL-E API to generate all brand images
 * 
 * Usage: npx tsx scripts/generate-images.ts
 * 
 * Environment: OPENAI_API_KEY must be set (or in .env file)
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

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define all images to generate with their configurations
interface ImageConfig {
  filename: string;
  outputPath: string;
  prompt: string;
  dimensions: string;
  size: '1024x1024' | '1792x1024' | '1024x1792';
  quality: 'standard' | 'hd';
  style: 'natural' | 'vivid';
  category: string;
}

// Brand color reference for prompts:
// - Forest Deep: #1A2E1A (rich, dark forest green)
// - Earth Dark: #2D2419 (warm, grounding brown)
// - Sacred Gold: #C4963F (spiritual, radiant gold)
// - Sacred Amber: #D4871A (transformative fire tones)
// - Cream: #F5F0E6 (soft, natural warmth)
// - Leaf: #4A6741 (living green, growth)

// All images to generate based on IMAGE-PROMPTS.md
const IMAGES_TO_GENERATE: ImageConfig[] = [
  // ═══════════════════════════════════════════════════════════════
  // HERO BACKGROUND IMAGES
  // ═══════════════════════════════════════════════════════════════
  {
    filename: 'home-hero.jpg',
    outputPath: 'public/images',
    prompt: `A sacred fire ceremony at dusk in a forest clearing. Warm golden flames dance at the center, casting amber and gold light onto surrounding ancient trees. Soft mist rises through shafts of golden sunlight breaking through the canopy. The atmosphere is deeply spiritual yet grounded—a sense of ancient wisdom meeting modern seeking. Earthy tones of deep forest green (#1A2E1A), rich brown (#2D2419), and sacred gold (#C4963F) dominate. Cinematic composition, ethereal yet powerful. No people visible, just the sacred space waiting. Photorealistic, 8K quality, soft depth of field.`,
    dimensions: '2400x800',
    size: '1792x1024',
    quality: 'hd',
    style: 'vivid',
    category: 'heroes',
  },
  {
    filename: 'about-hero.jpg',
    outputPath: 'public/images',
    prompt: `A powerful natural landscape at sunrise—rugged mountains meeting ancient forest. Strong granite formations suggest warrior strength, while soft golden morning light speaks to compassion and new beginnings. Mist rises from a valley below, symbolizing transformation from darkness to light. Deep forest greens blend with golden amber sunrise. The scene embodies both fierce protection and gentle guidance. Wide cinematic composition, no people, nature as character. Photorealistic, dramatic yet serene.`,
    dimensions: '2400x800',
    size: '1792x1024',
    quality: 'hd',
    style: 'vivid',
    category: 'heroes',
  },
  {
    filename: 'iboga-hero.jpg',
    outputPath: 'public/images',
    prompt: `Close-up of Iboga plant roots and bark with mystical golden light emanating from within. Tabernanthe iboga with its distinctive glossy leaves in soft focus background. The roots appear ancient and wise, textured and earthy. Bioluminescent quality to the golden light suggests the medicine's sacred power. Deep forest green background fading to darkness at edges. Macro photography style with dreamy bokeh. Colors: earth browns, sacred gold emanating from roots, deep green leaves. Mystical and reverent atmosphere.`,
    dimensions: '2400x800',
    size: '1792x1024',
    quality: 'hd',
    style: 'vivid',
    category: 'heroes',
  },
  {
    filename: 'journey-hero.jpg',
    outputPath: 'public/images',
    prompt: `A mystical forest path leading toward brilliant golden light breaking through at the end. Ancient trees create a natural cathedral, their branches interweaving overhead. The path transitions from shadow in the foreground to radiant light ahead—darkness to illumination. Moss-covered stones line the path. Morning mist adds ethereal quality. Colors transition from deep forest shadow (#1A2E1A) to sacred gold (#C4963F). The composition draws the eye forward, inviting the viewer to take the first step. Cinematic, hopeful, transformative.`,
    dimensions: '2400x800',
    size: '1792x1024',
    quality: 'hd',
    style: 'vivid',
    category: 'heroes',
  },
  {
    filename: 'contact-hero.jpg',
    outputPath: 'public/images',
    prompt: `A welcoming forest clearing with a natural stone doorway or gateway formed by ancient trees. Warm golden light pours through the opening, inviting entry. The scene suggests both threshold and welcome—a door standing open. Gentle mist, soft earth tones. The atmosphere is peaceful, safe, and encouraging. Colors: deep forest green transitioning to warm golden light. Wide composition with the gateway centered. Photorealistic, magical realism quality.`,
    dimensions: '2400x800',
    size: '1792x1024',
    quality: 'hd',
    style: 'vivid',
    category: 'heroes',
  },

  // ═══════════════════════════════════════════════════════════════
  // SECTION IMAGES
  // ═══════════════════════════════════════════════════════════════
  {
    filename: 'home-ceremony-space.jpg',
    outputPath: 'public/images',
    prompt: `Interior of a sacred ceremony space prepared for Iboga work. Natural materials—wood, stone, woven textiles in earth tones. A central fire pit or candle arrangement casts warm golden light. Sacred objects placed with intention: feathers, crystals, natural elements. Comfortable ceremonial bedding visible. The space feels both ancient and carefully tended. Warm, safe, grounding atmosphere. Colors: cream (#F5F0E6), sacred gold light (#C4963F), forest deep accents (#1A2E1A). Intimate documentary photography style.`,
    dimensions: '1200x900',
    size: '1792x1024',
    quality: 'hd',
    style: 'natural',
    category: 'sections',
  },
  {
    filename: 'about-gabon-temple.jpg',
    outputPath: 'public/images',
    prompt: `Traditional Bwiti temple in the Gabonese rainforest. Thatched roof structure with natural materials, surrounded by dense tropical vegetation. Warm golden afternoon light filters through the canopy. Sacred carvings or painted symbols visible on the structure. The temple feels ancient, wise, and alive with spiritual energy. African birds or butterflies add life. Colors: jungle greens, warm wood tones, golden light, earth browns. Documentary style capturing authentic Bwiti tradition. Respectful, reverent composition.`,
    dimensions: '1200x900',
    size: '1792x1024',
    quality: 'hd',
    style: 'natural',
    category: 'sections',
  },
  {
    filename: 'iboga-plant.jpg',
    outputPath: 'public/images',
    prompt: `Detailed botanical portrait of Tabernanthe iboga (Iboga plant). Healthy specimen with glossy dark green leaves, showing both foliage and the distinctive root bark. Soft, diffused natural lighting. Clean composition against a natural forest floor background slightly blurred. Scientific accuracy combined with artistic beauty. The image educates while evoking reverence for the sacred plant. Colors: deep green leaves, brown bark, soft golden highlights, neutral earth tones. Botanical photography style with artistic sensibility.`,
    dimensions: '1600x900',
    size: '1792x1024',
    quality: 'hd',
    style: 'natural',
    category: 'sections',
  },
  {
    filename: 'iboga-bwiti-ceremony.jpg',
    outputPath: 'public/images',
    prompt: `Traditional Bwiti ceremonial elements arranged with sacred intention. Central fire with dancing flames, surrounded by ceremonial objects: traditional instruments (like the ngombi harp), carved wooden figures, raffia elements, and ritual items. Torchlight and firelight create warm golden illumination against the darkness. The scene captures the profound spiritual heritage of the tradition. No people visible, but their presence is felt. Colors: fire gold and amber, deep shadows, earth browns, touches of traditional red and white pigments. Anthropological documentary meets fine art photography.`,
    dimensions: '1200x900',
    size: '1792x1024',
    quality: 'hd',
    style: 'natural',
    category: 'sections',
  },
  {
    filename: 'journey-ceremony-space.jpg',
    outputPath: 'public/images',
    prompt: `A ceremonial space prepared for deep healing work. Comfortable mattress or bedding arranged on natural flooring. Soft blankets in earth tones. A small altar nearby with candles casting warm golden light, fresh flowers, sacred objects. Natural materials throughout—wood, stone, plant elements. The space radiates safety, intention, and care. Evening atmosphere, intimate and protected. Colors: cream and earth tones, warm candlelight, forest green accents. Interior documentary photography with reverent atmosphere.`,
    dimensions: '1600x900',
    size: '1792x1024',
    quality: 'hd',
    style: 'natural',
    category: 'sections',
  },
  {
    filename: 'contact-connection.jpg',
    outputPath: 'public/images',
    prompt: `Two hands reaching toward each other in gentle support, not quite touching—the moment before connection. Warm golden light bathes the hands from one side. One hand extends from darkness (representing the seeker), the other from light (representing guidance). Skin tones diverse and warm. Soft focus background of natural elements—perhaps forest or earth. The image captures the courage of reaching out and the compassion of response. Colors: warm skin tones, sacred gold light, soft shadows. Intimate, emotional photography. Hands only, universal and symbolic.`,
    dimensions: '1600x900',
    size: '1792x1024',
    quality: 'hd',
    style: 'natural',
    category: 'sections',
  },

  // ═══════════════════════════════════════════════════════════════
  // PORTRAIT IMAGES (Note: These are placeholders - should use actual photos of Jay and Moughenda)
  // ═══════════════════════════════════════════════════════════════
  {
    filename: 'home-jay-portrait.jpg',
    outputPath: 'public/images',
    prompt: `Portrait of a strong, grounded man with kind eyes and warrior presence. Natural outdoor setting with soft golden hour lighting. The subject radiates both fierce protection and gentle compassion. Authentic, not posed—a moment of genuine presence. Dressed simply, naturally. Background is soft-focus forest or natural environment. Warm skin tones, sacred gold light, deep green background hints. The image captures someone you would trust with your most vulnerable moment. Documentary portrait style with emotional depth. Mixed race man in his 40s with thoughtful expression.`,
    dimensions: '400x400',
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
    category: 'portraits',
  },
  {
    filename: 'about-jay-formal.jpg',
    outputPath: 'public/images',
    prompt: `Powerful yet approachable portrait of a man. Subject facing slightly off-camera, contemplative expression that shows both strength and wisdom. Natural light from a window or golden hour sun. Simple, meaningful background—perhaps a hint of ceremonial space or natural elements. The image conveys "I have walked through darkness and found light, and I can help you do the same." Warm tones, grounded composition. Professional portrait photography with soul. Mixed race man in his 40s.`,
    dimensions: '400x400',
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
    category: 'portraits',
  },
  {
    filename: 'about-moughenda-portrait.jpg',
    outputPath: 'public/images',
    prompt: `Portrait representing a respected Bwiti elder shaman. Wise, ancient eyes that have seen many journeys. Traditional elements present but not stereotypical—authentic dignity. Natural lighting, perhaps firelight quality. Deep wisdom and kindness visible in expression. Background suggests African forest or traditional space. Colors: warm skin tones, earth browns, hints of ceremonial elements. Respectful, honoring composition. African elder man with traditional markings, radiating spiritual wisdom and compassion.`,
    dimensions: '400x400',
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
    category: 'portraits',
  },

  // ═══════════════════════════════════════════════════════════════
  // GALLERY / NATURE ELEMENTS
  // ═══════════════════════════════════════════════════════════════
  {
    filename: 'gallery-healing-center.jpg',
    outputPath: 'public/images',
    prompt: `Serene retreat property in natural Canadian setting. Comfortable yet simple accommodations visible. Forest surrounding the space. Garden elements, outdoor ceremony areas. The location feels both removed from the world and completely safe. Morning light, mist rising. The image says "here is a place where transformation happens." Architectural photography meets nature documentation. Cozy wooden lodge nestled among pine trees with welcoming atmosphere.`,
    dimensions: '1200x800',
    size: '1792x1024',
    quality: 'hd',
    style: 'natural',
    category: 'gallery',
  },
  {
    filename: 'nature-ancient-tree.jpg',
    outputPath: 'public/images',
    prompt: `Ancient tree trunk with golden sunlight streaming through leaves, bark texture detailed. Moss growing on the weathered wood. Deep forest green and golden light interplay. The tree radiates ancient wisdom and grounding energy. Macro details visible on bark. Colors: rich browns, deep greens, sacred gold light filtering through. Nature photography capturing the timeless quality of old growth forest.`,
    dimensions: '800x600',
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
    category: 'gallery',
  },
  {
    filename: 'nature-forest-stream.jpg',
    outputPath: 'public/images',
    prompt: `Forest stream with smooth stones, golden light reflection on water surface. Clear water flowing over mossy rocks. Ferns and forest plants along the banks. The scene is peaceful, purifying, regenerative. Morning light creates magical golden highlights on the water. Colors: deep greens, crystal clear water, golden highlights, earth browns. Nature photography with a spiritual, cleansing quality.`,
    dimensions: '800x600',
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
    category: 'gallery',
  },
  {
    filename: 'nature-sacred-fire.jpg',
    outputPath: 'public/images',
    prompt: `Sacred fire flames close-up, dancing gold and amber tongues of fire against darkness. The fire appears alive, transformative, purifying. Sparks rising into the night. Warm, inviting, powerful. Colors: golden yellow, deep amber, orange, with black background. The fire represents transformation, warmth, ceremony, and the light that guides through darkness. Fine art nature photography.`,
    dimensions: '800x600',
    size: '1024x1024',
    quality: 'hd',
    style: 'vivid',
    category: 'gallery',
  },
  {
    filename: 'nature-morning-mist.jpg',
    outputPath: 'public/images',
    prompt: `Morning mist rising through ancient trees, mystical atmosphere. Shafts of golden sunlight pierce through the fog. The scene suggests transition, awakening, the threshold between worlds. Forest silhouettes fade into the mist. Colors: soft grays, golden light rays, deep green undertones. The image evokes emergence from confusion into clarity. Atmospheric landscape photography.`,
    dimensions: '800x600',
    size: '1024x1024',
    quality: 'hd',
    style: 'vivid',
    category: 'gallery',
  },
  {
    filename: 'nature-fern-unfurling.jpg',
    outputPath: 'public/images',
    prompt: `Fern unfurling—a young fiddlehead opening to reveal new fronds. The spiral shape symbolizing new growth, transformation, the beginning of something beautiful. Soft morning light, dewdrops on the frond. Forest floor background softly blurred. Colors: vibrant green, soft golden highlights, earth tones. Macro nature photography capturing the essence of rebirth and renewal.`,
    dimensions: '800x600',
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
    category: 'gallery',
  },
  {
    filename: 'nature-roots.jpg',
    outputPath: 'public/images',
    prompt: `Roots intertwining underground, exposed by erosion or growing over forest floor. Multiple root systems connecting, symbolizing connection, foundation, and the hidden support systems that sustain us. Earth tones, rich soil visible. Golden light catching the root textures. Colors: deep browns, earth tones, touches of sacred gold light. Nature photography capturing the interconnectedness of all life.`,
    dimensions: '800x600',
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
    category: 'gallery',
  },
  {
    filename: 'nature-dew-leaf.jpg',
    outputPath: 'public/images',
    prompt: `Single leaf with morning dew drops, macro detail showing the intricate structure. Each dewdrop catches and refracts golden morning light. The leaf is fresh, alive, vibrant green. Background is softly blurred forest. Colors: deep green leaf, crystal clear water drops, golden light reflections. Macro photography capturing nature's perfect details and the magic of morning.`,
    dimensions: '800x600',
    size: '1024x1024',
    quality: 'hd',
    style: 'natural',
    category: 'gallery',
  },
  {
    filename: 'nature-night-sky.jpg',
    outputPath: 'public/images',
    prompt: `Night sky through forest canopy, stars visible through the trees. The Milky Way stretching across the sky. Tree silhouettes frame the cosmic view. The image suggests connection to something greater, ancestral wisdom, the vastness of existence. Colors: deep blue-black sky, silver-white stars, dark forest silhouettes. Astrophotography meets nature photography. Sense of wonder and cosmic connection.`,
    dimensions: '800x600',
    size: '1024x1024',
    quality: 'hd',
    style: 'vivid',
    category: 'gallery',
  },
];

// Download image from URL
async function downloadImage(url: string, filepath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filepath);
    
    protocol.get(url, (response) => {
      // Handle redirects
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
      fs.unlink(filepath, () => {}); // Delete incomplete file
      reject(err);
    });
  });
}

// Generate a single image
async function generateImage(config: ImageConfig): Promise<boolean> {
  const outputDir = path.join(process.cwd(), config.outputPath);
  const outputFile = path.join(outputDir, config.filename);
  
  // Check if image already exists
  if (fs.existsSync(outputFile)) {
    console.log(`⏭️  Skipping ${config.filename} (already exists)`);
    return true;
  }
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  console.log(`🌿 Generating ${config.filename}...`);
  
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
    
    // Download the image
    await downloadImage(imageUrl, outputFile);
    console.log(`✅ Saved ${config.filename}`);
    return true;
    
  } catch (error: any) {
    console.error(`❌ Error generating ${config.filename}:`, error.message || error);
    return false;
  }
}

// Main execution
async function main(): Promise<void> {
  console.log('═══════════════════════════════════════════════════════════════');
  console.log('  🌿 Iboga Life Change - Image Generation Script');
  console.log('═══════════════════════════════════════════════════════════════\n');
  console.log('  "Transforming lives through the sacred healing power of Iboga"');
  console.log('  "and the ancient wisdom of the Bwiti tradition."');
  console.log('═══════════════════════════════════════════════════════════════\n');
  
  // Check for API key
  if (!process.env.OPENAI_API_KEY) {
    console.error('❌ Error: OPENAI_API_KEY environment variable is not set.');
    console.log('\nPlease set your OpenAI API key:');
    console.log('  export OPENAI_API_KEY="your-api-key-here"');
    console.log('\nOr create a .env file with:');
    console.log('  OPENAI_API_KEY=your-api-key-here');
    process.exit(1);
  }
  
  console.log(`📊 Total images to generate: ${IMAGES_TO_GENERATE.length}`);
  console.log('───────────────────────────────────────────────────────────────\n');
  
  // Group images by category for organized output
  const categories = [...new Set(IMAGES_TO_GENERATE.map(img => img.category))];
  
  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;
  
  for (const category of categories) {
    const categoryImages = IMAGES_TO_GENERATE.filter(img => img.category === category);
    console.log(`\n🌱 ${category.toUpperCase()} (${categoryImages.length} images)`);
    console.log('───────────────────────────────────────────────────────────────');
    
    for (const imageConfig of categoryImages) {
      const outputFile = path.join(process.cwd(), imageConfig.outputPath, imageConfig.filename);
      
      if (fs.existsSync(outputFile)) {
        console.log(`⏭️  Skipping ${imageConfig.filename} (already exists)`);
        skipCount++;
        continue;
      }
      
      const success = await generateImage(imageConfig);
      if (success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Add a delay between API calls to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1500));
    }
  }
  
  // Print summary
  console.log('\n═══════════════════════════════════════════════════════════════');
  console.log('  🌿 Generation Summary');
  console.log('═══════════════════════════════════════════════════════════════');
  console.log(`  ✅ Successfully generated: ${successCount}`);
  console.log(`  ⏭️  Skipped (already exist): ${skipCount}`);
  console.log(`  ❌ Failed: ${failCount}`);
  console.log(`  📁 Total processed: ${successCount + skipCount + failCount}`);
  console.log('═══════════════════════════════════════════════════════════════\n');
  
  console.log('\n🌿 Image generation complete!');
  console.log('\nNext steps:');
  console.log('  1. Review the generated images in public/images/');
  console.log('  2. Replace portrait placeholders with actual photos of Jay and Moughenda');
  console.log('  3. Run the dev server to preview: npm run dev');
  console.log('\n✨ May your healing journey bring transformation and light.');
}

main().catch(console.error);

