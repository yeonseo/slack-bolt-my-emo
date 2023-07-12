const sharp = require('sharp');
const axios = require('axios');
const fs = require('fs');

async function resizeImage(imageUrl) {
    // Get the image data
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');

    // Resize the image
    const resizedBuffer = await sharp(buffer).resize(150, 150).toBuffer();

    // Write the resized image to disk
    fs.writeFileSync('resizedImage.jpg', resizedBuffer);
}

module.exports = resizeImage;