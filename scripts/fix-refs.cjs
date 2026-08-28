const fs = require("fs");
const path = require("path");

function walk(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const fp = path.join(dir, f.name);
    if (f.isDirectory() && f.name !== "node_modules" && f.name !== ".next") {
      files.push(...walk(fp));
    } else if (/\.(tsx|ts|css)$/.test(f.name)) {
      files.push(fp);
    }
  }
  return files;
}

let count = 0;
for (const file of walk("src")) {
  let content = fs.readFileSync(file, "utf8");
  const updated = content.replace(/(\/[^"']*)\.(png|jpg|jpeg)(["'])/g, (m, p, ext, q) => p + ".webp" + q);
  if (content !== updated) {
    fs.writeFileSync(file, updated);
    console.log("Updated:", path.basename(file));
    count++;
  }
}
console.log("Total updated:", count, "files");
