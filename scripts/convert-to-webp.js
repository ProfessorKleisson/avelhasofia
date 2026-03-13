import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public/img');
const SRC_DIR = path.resolve(__dirname, '../src');
const BACKUP_DIR = path.resolve(__dirname, '../backup_images');

if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });

async function convertDir(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stats = fs.statSync(fullPath);

        if (stats.isDirectory()) {
            await convertDir(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg', '.gif'].includes(ext)) {
                const basename = path.basename(file, ext);
                const webpFileName = `${basename}.webp`;
                const webpPath = path.join(dir, webpFileName);

                console.log(`Converting: ${file} -> ${webpFileName}`);

                try {
                    await sharp(fullPath)
                        .webp({ quality: 75 })
                        .toFile(webpPath);

                    // Move original to backup
                    const relativeDir = path.relative(PUBLIC_DIR, dir);
                    const backupSubDir = path.join(BACKUP_DIR, relativeDir);
                    if (!fs.existsSync(backupSubDir)) fs.mkdirSync(backupSubDir, { recursive: true });

                    fs.renameSync(fullPath, path.join(backupSubDir, file));
                } catch (err) {
                    console.error(`Failed to convert ${file}:`, err);
                }
            }
        }
    }
}

async function updateCodeReferences() {
    const filesToUpdate = [];

    function findFiles(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
            if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;

            const res = path.resolve(dir, entry.name);
            if (entry.isDirectory()) {
                findFiles(res);
            } else if (/\.(tsx|ts|css|html|js|json)$/.test(entry.name)) {
                if (entry.name === 'convert-to-webp.js') continue;
                filesToUpdate.push(res);
            }
        }
    }

    findFiles(path.resolve(__dirname, '../'));

    console.log(`Updating references in ${filesToUpdate.length} files...`);

    for (const file of filesToUpdate) {
        let content = fs.readFileSync(file, 'utf8');
        let changed = false;

        // More aggressive regex: looks for .png, .jpg, .jpeg, .gif in any string or literal
        const regex = /\.(png|jpg|jpeg|gif)(?=["'`\b]|$)/gi;

        if (regex.test(content)) {
            content = content.replace(regex, (match) => {
                changed = true;
                return '.webp';
            });
        }

        if (changed) {
            console.log(`Updated: ${path.basename(file)}`);
            fs.writeFileSync(file, content, 'utf8');
        }
    }
}

async function main() {
    console.log('--- Starting WebP Conversion ---');
    await convertDir(PUBLIC_DIR);
    console.log('--- Updating Code References ---');
    await updateCodeReferences();
    console.log('--- Done ---');
}

main().catch(console.error);
