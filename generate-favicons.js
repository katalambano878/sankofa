const sharp = require('sharp');
const path = require('path');

const sourceImage = path.join(__dirname, 'public', 'favicon-source.png');
const publicDir = path.join(__dirname, 'public');

async function generateFavicons() {
    try {
        // Generate 32x32 favicon
        await sharp(sourceImage)
            .resize(32, 32)
            .png()
            .toFile(path.join(publicDir, 'icon-32.png'));
        console.log('Created icon-32.png');

        // Generate 192x192 for PWA
        await sharp(sourceImage)
            .resize(192, 192)
            .png()
            .toFile(path.join(publicDir, 'icon-192.png'));
        console.log('Created icon-192.png');

        // Generate 180x180 Apple Touch Icon
        await sharp(sourceImage)
            .resize(180, 180)
            .png()
            .toFile(path.join(publicDir, 'apple-touch-icon.png'));
        console.log('Created apple-touch-icon.png');

        // Generate favicon.ico (32x32 as PNG, rename to .ico)
        await sharp(sourceImage)
            .resize(48, 48)
            .png()
            .toFile(path.join(publicDir, 'favicon.ico'));
        console.log('Created favicon.ico');

        console.log('All favicons generated successfully!');
    } catch (error) {
        console.error('Error generating favicons:', error);
    }
}

generateFavicons();
