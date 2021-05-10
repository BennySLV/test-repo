// MODULES

// CommonJS (library) - every file is a module (by default)
// Modules - encapsulated code (only sharing the minimum code (i.e. code that we want to be seen))

const { ben, nat, matt } = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-syntax");
require("./7-mind-grenade");

console.log(data);

sayHi(ben);
sayHi(nat);
sayHi(matt);
