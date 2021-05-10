// GLOBALS - NO WINDOW OBJECT!

// __dirname - path to the current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about the current module (file)
// process - info about env (environment) where the program is being executed

console.log(__dirname);
setInterval(() => {
	console.log("Hello World");
}, 1000);
