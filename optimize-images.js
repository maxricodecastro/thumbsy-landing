const sharp = require('sharp');
const fs = require('fs');

async function optimizeImage() {
  try {
    await sharp('src/river.png')
      .resize(1920, 1080, {
        fit: 'cover',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile('src/river.webp');

    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage(); 