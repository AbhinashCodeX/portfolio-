const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processSculpture() {
  console.log('--- Step 1 & 2: Loading & Segmenting Silhouettes ---');
  const frontPath = path.join(__dirname, 'public', 'clay-front.png');
  const sidePath = path.join(__dirname, 'public', 'clay-side.png');

  // Scale to 600x800 for high resolution voxel carving
  const W = 300;
  const H = 400;

  const frontRaw = await sharp(frontPath)
    .resize(W, H, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
    .ensureAlpha()
    .raw()
    .toBuffer();

  const sideRaw = await sharp(sidePath)
    .resize(W, H, { fit: 'contain', background: { r: 255, g: 255, b: 255 } })
    .ensureAlpha()
    .raw()
    .toBuffer();

  // Create front silhouette mask: threshold grey below 230
  const frontMask = new Uint8Array(W * H);
  const frontBrightness = new Float32Array(W * H);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = (y * W + x) * 4;
      const r = frontRaw[idx];
      const g = frontRaw[idx + 1];
      const b = frontRaw[idx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      frontBrightness[y * W + x] = 1.0 - (lum / 255.0);
      frontMask[y * W + x] = lum < 228 ? 1 : 0;
    }
  }

  // Create side silhouette mask
  const sideMask = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) {
    for (let z = 0; z < W; z++) {
      const idx = (y * W + z) * 4;
      const r = sideRaw[idx];
      const g = sideRaw[idx + 1];
      const b = sideRaw[idx + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      sideMask[y * W + z] = lum < 228 ? 1 : 0;
    }
  }

  console.log('--- Step 3: Voxel Volume Carving & Surface Extraction ---');
  // At each horizontal slice (Y), find front X bounds and side Z bounds
  const surfacePoints = [];
  const TOTAL_DOTS = 78000;

  for (let y = 10; y < H - 10; y++) {
    // Find minX, maxX for this Y in front view
    let minX = W, maxX = 0;
    for (let x = 0; x < W; x++) {
      if (frontMask[y * W + x]) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }

    // Find minZ, maxZ for this Y in side view
    let minZ = W, maxZ = 0;
    for (let z = 0; z < W; z++) {
      if (sideMask[y * W + z]) {
        if (z < minZ) minZ = z;
        if (z > maxZ) maxZ = z;
      }
    }

    if (minX < maxX && minZ < maxZ) {
      const cx = (minX + maxX) / 2;
      const rx = (maxX - minX) / 2;
      const cz = (minZ + maxZ) / 2;
      const rz = (maxZ - minZ) / 2;

      // Sample along the ellipse perimeter with jitter
      const numSamples = Math.floor(Math.max(12, (rx + rz) * 1.8));
      for (let s = 0; s < numSamples; s++) {
        const theta = (s / numSamples) * Math.PI * 2 + (Math.random() - 0.5) * 0.05;
        const px = cx + rx * Math.cos(theta);
        const pz = cz + rz * Math.sin(theta);

        // Normalized 3D coords centered at (0, 0, 0)
        const normX = ((px - W / 2) / (W / 2)) * 2.3;
        const normY = -((y - H / 2) / (H / 2)) * 3.1 + 0.4;
        const normZ = ((pz - cz) / (rz || 1)) * (rz / (W / 2)) * 1.8;

        // Normal vector from center of slice
        const nx = Math.cos(theta);
        const ny = 0.05 * (Math.random() - 0.5);
        const nz = Math.sin(theta);

        // Brightness from front mask & angle
        const sampleX = Math.min(W - 1, Math.max(0, Math.floor(px)));
        const sampleY = Math.min(H - 1, Math.max(0, Math.floor(y)));
        const baseBright = frontBrightness[sampleY * W + sampleX] || 0.5;
        const brightness = Math.min(1.0, Math.max(0.2, baseBright * 1.2 + 0.1 * nz));

        surfacePoints.push({
          x: normX,
          y: normY,
          z: normZ,
          nx, ny, nz,
          rand: Math.random(),
          brightness
        });
      }
    }
  }

  console.log(`Carved surface generated: ${surfacePoints.length} candidate points.`);

  // Sample or expand to exactly ~78,000 dots
  const finalDots = [];
  while (finalDots.length < TOTAL_DOTS) {
    const src = surfacePoints[Math.floor(Math.random() * surfacePoints.length)];
    if (!src) break;
    // Blue noise jitter
    const jitter = 0.018;
    finalDots.push({
      x: src.x + (Math.random() - 0.5) * jitter,
      y: src.y + (Math.random() - 0.5) * jitter,
      z: src.z + (Math.random() - 0.5) * jitter,
      nx: src.nx,
      ny: src.ny,
      nz: src.nz,
      rand: Math.random(),
      brightness: src.brightness + (Math.random() - 0.5) * 0.08
    });
  }

  console.log(`--- Step 5: Serializing ${finalDots.length} dots to binary file ---`);
  // Format per dot: 8 Float32s (32 bytes per dot):
  // [x, y, z, nx, ny, nz, random, brightness]
  const buffer = Buffer.alloc(finalDots.length * 8 * 4);
  for (let i = 0; i < finalDots.length; i++) {
    const d = finalDots[i];
    const offset = i * 32;
    buffer.writeFloatLE(d.x, offset);
    buffer.writeFloatLE(d.y, offset + 4);
    buffer.writeFloatLE(d.z, offset + 8);
    buffer.writeFloatLE(d.nx, offset + 12);
    buffer.writeFloatLE(d.ny, offset + 16);
    buffer.writeFloatLE(d.nz, offset + 20);
    buffer.writeFloatLE(d.rand, offset + 24);
    buffer.writeFloatLE(d.brightness, offset + 28);
  }

  const outPublic = path.join(__dirname, 'public', 'dots.bin');
  const outSrc = path.join(__dirname, 'src', 'assets', 'dots.bin');
  fs.writeFileSync(outPublic, buffer);
  fs.writeFileSync(outSrc, buffer);
  console.log(`Successfully generated dots.bin (${(buffer.length / 1024 / 1024).toFixed(2)} MB) with ${finalDots.length} dots!`);
}

processSculpture().catch(console.error);
