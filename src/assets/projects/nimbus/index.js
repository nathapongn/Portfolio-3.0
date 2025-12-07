function processFiles(files) {
  Object.entries(files).forEach(([path, mod]) => {

    const clean = path
      .replace('./', '')
      .replace('vid/', '')
      .replace(/\.(webp|mp4)$/, '');

    const lastUnderscore = clean.lastIndexOf('_');

    let name, theme;

    if (lastUnderscore === -1) {
      // No _theme → treat whole name as "name", theme = "default"
      name = clean;
      theme = "default";
    } else {
      name = clean.substring(0, lastUnderscore);
      theme = clean.substring(lastUnderscore + 1);
    }

    if (!assets[name]) assets[name] = {};
    assets[name][theme] = mod.default;
  });
}
