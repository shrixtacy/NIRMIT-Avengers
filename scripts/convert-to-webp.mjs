import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const PUBLIC_DIR = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1").replace(/%20/g, " ");

// Quality settings per use case
const QUALITY_MAP = {
  // Hero layers — highest quality, they're large canvases
  "layers": 88,
  // Cards — high quality
  "cards": 85,
  // Everything else
  "default": 82,
};

const getQuality = (filePath) => {
  if (filePath.includes("layers")) return QUALITY_MAP.layers;
  if (filePath.includes("cards")) return QUALITY_MAP.cards;
  return QUALITY_MAP.default;
};

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getAllImages(fullPath));
    } else if (/\.(png|jpg|jpeg)$/i.test(entry.name)) {
      // Skip SVGs and already-webp
      files.push(fullPath);
    }
  }
  return files;
}

async function convert(filePath) {
  const ext = extname(filePath).toLowerCase();
  const webpPath = filePath.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const quality = getQuality(filePath);

  const beforeStat = await stat(filePath);
  const beforeMB = (beforeStat.size / 1024 / 1024).toFixed(2);

  try {
    let pipeline = sharp(filePath);

    if (ext === ".png") {
      // For PNGs that might have transparency, use lossless=false with quality
      pipeline = pipeline.webp({ quality, lossless: false, nearLossless: false, smartSubsample: true });
    } else {
      pipeline = pipeline.webp({ quality, smartSubsample: true });
    }

    await pipeline.toFile(webpPath);

    const afterStat = await stat(webpPath);
    const afterMB = (afterStat.size / 1024 / 1024).toFixed(2);
    const saved = (((beforeStat.size - afterStat.size) / beforeStat.size) * 100).toFixed(0);

    console.log(`✓ ${basename(filePath).padEnd(45)} ${beforeMB}MB → ${afterMB}MB  (${saved}% saved)`);

    // Remove original after successful conversion
    await unlink(filePath);
  } catch (err) {
    console.error(`✗ ${basename(filePath)}: ${err.message}`);
  }
}

const images = await getAllImages(PUBLIC_DIR);
console.log(`\nConverting ${images.length} images to WebP...\n`);

// Process in parallel batches of 4
for (let i = 0; i < images.length; i += 4) {
  await Promise.all(images.slice(i, i + 4).map(convert));
}

console.log("\nDone! All images converted to WebP.");
