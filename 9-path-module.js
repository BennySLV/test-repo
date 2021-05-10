// Path module
const path = require("path");
console.log(path.sep); // path separator (i.e "/")

const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName); // file name without the absolute path

const absolutePath = path.resolve(
	__dirname,
	"content",
	"subfolder",
	"test.txt"
);

console.log(absolutePath);
