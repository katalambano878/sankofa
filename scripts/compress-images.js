const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function compressImage(inputPath, outputPath) {
    const ext = path.extname(inputPath).toLowerCase();

    try {
        if (ext === '.png') {
            await sharp(inputPath)
                .webp({ quality: 80, effort: 6 })
                .toFile(outputPath.replace('.png', '.webp'));

            await sharp(inputPath)
                .png({ quality: 80, compressionLevel: 9 })
                .toFile(outputPath);
        } else if (ext === '.jpg' || ext === '.jpeg') {
            await sharp(inputPath)
                .webp({ quality: 80, effort: 6 })
                .toFile(outputPath.replace(/\.(jpg|jpeg)$/, '.webp'));

            await sharp(inputPath)
                .jpeg({ quality: 80, mozjpeg: true })
                .toFile(outputPath);
        }

        console.log(`✓ Compressed: ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`✗ Error compressing ${inputPath}:`, error.message);
    }
}

async function processDirectory(directory) {
    const entries = await fs.readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);

        if (entry.isDirectory()) {
            await processDirectory(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const tempPath = fullPath + '.tmp';
                await compressImage(fullPath, tempPath);

                // Replace original with compressed version
                try {
                    await fs.rename(tempPath, fullPath);
                } catch (error) {
                    console.error(`Error replacing ${fullPath}:`, error.message);
                }
            }
        }
    }
}

async function main() {
    const publicDir = path.join(__dirname, '..', 'public');
    console.log('🖼️  Starting image compression...\n');
    console.log(`Processing directory: ${publicDir}\n`);

    await processDirectory(publicDir);

    console.log('\n✅ Image compression complete!');
    console.log('📦 WebP versions created for better browser support');
    console.log('🚀 Original files compressed and optimized');
}

main().catch(console.error);
