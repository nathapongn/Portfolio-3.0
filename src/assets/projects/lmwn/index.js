const images = import.meta.glob('./*.webp', { eager: true });
const videos = import.meta.glob('./vid/*.mp4', { eager: true });

const assets = {};

function processFiles(files) {
  Object.entries(files).forEach(([path, mod]) => {
    const clean = path
      .replace('./', '')
      .replace('vid/', '')
      .replace(/\.(webp|mp4)$/, '');

    const lastUnderscore = clean.lastIndexOf('_');

    if (lastUnderscore === -1) {
      // No suffix → make it a flat string
      assets[clean] = mod.default;
      return;
    }

    // Has `_theme`
    const name = clean.substring(0, lastUnderscore);
    const theme = clean.substring(lastUnderscore + 1);

    // If base (flat) exists, preserve it as a string
    if (!assets[name] || typeof assets[name] !== 'object') {
      const existing = assets[name];
      assets[name] = existing ? { base: existing } : {};
    }

    assets[name][theme] = mod.default;
  });
}

processFiles(images);
processFiles(videos);

export default assets;
