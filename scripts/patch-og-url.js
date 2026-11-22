/**
 * Vercel build: injects absolute site + OG image URLs into Open Graph meta tags.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const indexPath = path.join(root, "index.html");
const metaPath = path.join(root, "og-meta.json");

function normalizeSiteUrl(raw) {
  if (!raw) return "";
  const trimmed = String(raw).trim().replace(/\/$/, "");
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

const siteUrl =
  normalizeSiteUrl(process.env.SITE_URL) ||
  "https://antima-saksham.vercel.app";

let configuredImage = normalizeSiteUrl(process.env.OG_IMAGE_URL);
if (!configuredImage) {
  try {
    const cfgPath = path.join(root, "wedding-config.js");
    const cfgText = fs.readFileSync(cfgPath, "utf8");
    const m = cfgText.match(/ogImageUrl:\s*"([^"]+)"/);
    if (m && m[1].trim()) configuredImage = normalizeSiteUrl(m[1]);
  } catch {
    /* optional */
  }
}

let imagePath = "/og-share.jpg";
let imageWidth = "1200";
let imageHeight = "630";

if (fs.existsSync(metaPath)) {
  try {
    const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
    if (meta.landscape?.path) {
      imagePath = meta.landscape.path;
      imageWidth = String(meta.landscape.width || 1200);
      imageHeight = String(meta.landscape.height || 630);
    } else if (meta.whatsapp?.path) {
      imagePath = meta.whatsapp.path;
      imageWidth = String(meta.whatsapp.width || 800);
      imageHeight = String(meta.whatsapp.height || 800);
    }
  } catch {
    /* use defaults */
  }
}

// Clean absolute image URL
const ogImageBase = configuredImage || `${siteUrl.replace(/\/$/, "")}${imagePath}`;

let html = fs.readFileSync(indexPath, "utf8");

// Replace placeholders if present
html = html.replaceAll("__SITE_URL__", siteUrl.replace(/\/$/, ""));
html = html.replaceAll("__OG_IMAGE_URL__", ogImageBase);
html = html.replaceAll("__OG_IMAGE_WIDTH__", imageWidth);
html = html.replaceAll("__OG_IMAGE_HEIGHT__", imageHeight);

// Also replace existing meta tag attributes so re-running build always updates them cleanly
html = html.replace(/(<meta\s+property="og:image"\s+content=")[^"]*(")/i, `$1${ogImageBase}$2`);
html = html.replace(/(<meta\s+property="og:image:secure_url"\s+content=")[^"]*(")/i, `$1${ogImageBase}$2`);
html = html.replace(/(<link\s+rel="image_src"\s+href=")[^"]*(")/i, `$1${ogImageBase}$2`);
html = html.replace(/(<meta\s+name="twitter:image"\s+content=")[^"]*(")/i, `$1${ogImageBase}$2`);
html = html.replace(/(<meta\s+property="og:image:width"\s+content=")[^"]*(")/i, `$1${imageWidth}$2`);
html = html.replace(/(<meta\s+property="og:image:height"\s+content=")[^"]*(")/i, `$1${imageHeight}$2`);
html = html.replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/i, `$1${siteUrl.replace(/\/$/, "")}/$2`);
html = html.replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/i, `$1${siteUrl.replace(/\/$/, "")}/$2`);

fs.writeFileSync(indexPath, html);

console.log(`Open Graph base URL: ${siteUrl.replace(/\/$/, "")}`);
console.log(`Open Graph image URL: ${ogImageBase}`);
