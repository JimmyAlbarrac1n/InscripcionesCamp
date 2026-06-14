// Optimiza las fotos del campamento (src/assets/Camp*.jpg): redimensiona y comprime.
// Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../src/assets");
const MAX = 1200; // ancho/alto máximo en px
const QUALITY = 72;

const files = (await readdir(dir)).filter((f) => /^Camp\d+\.(jpe?g|png)$/i.test(f));

let before = 0;
let after = 0;
for (const f of files) {
  const p = path.join(dir, f);
  const sizeBefore = (await stat(p)).size;
  const input = await readFile(p); // leemos a buffer para no dejar el archivo bloqueado (Windows)
  const buf = await sharp(input)
    .rotate() // respeta orientación EXIF de fotos de celular
    .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: QUALITY })
    .toBuffer();
  await writeFile(p, buf);
  before += sizeBefore;
  after += buf.length;
  console.log(`${f.padEnd(14)} ${(sizeBefore / 1024).toFixed(0).padStart(5)} KB -> ${(buf.length / 1024).toFixed(0).padStart(5)} KB`);
}
console.log(`\nTOTAL: ${(before / 1024 / 1024).toFixed(2)} MB -> ${(after / 1024 / 1024).toFixed(2)} MB`);
