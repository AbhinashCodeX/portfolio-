const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function enhancePhoto() {
  const input = path.join(__dirname, 'src', 'assets', 'photo.png');
  const tempOutput = path.join(__dirname, 'src', 'assets', 'photo_sharp.png');
  const finalSrc = path.join(__dirname, 'src', 'assets', 'photo.png');
  const finalPublic = path.join(__dirname, 'public', 'photo.png');

  // Load buffer completely into memory first
  const inputBuffer = fs.readFileSync(input);

  const buffer = await sharp(inputBuffer)
    .resize(1920, 1080, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } })
    .sharpen({
      sigma: 1.8,
      m1: 1.6,
      m2: 2.5
    })
    .modulate({
      brightness: 1.06,
      saturation: 1.10
    })
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(tempOutput, buffer);
  fs.copyFileSync(tempOutput, finalSrc);
  fs.copyFileSync(tempOutput, finalPublic);
  fs.unlinkSync(tempOutput);
  console.log('Successfully sharpened photo to 1920x1080 resolution:', buffer.length, 'bytes');
}

enhancePhoto().catch(console.error);
