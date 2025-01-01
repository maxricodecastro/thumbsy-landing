const sharp = require('sharp');
const fs = require('fs');

async function optimizeImage() {
  try {
    await sharp('src/tree.png')
      .resize(1080, 1920, {
        fit: 'cover',
        withoutEnlargement: true
      })
      .webp({ quality: 80 })
      .toFile('src/tree.webp');

    console.log('Image optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage(); 