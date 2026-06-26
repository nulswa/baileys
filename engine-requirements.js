const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(`\n📍 Se recomiendo la version ${process.versions.node} o mas de node.js);
  process.exit(1);
}
