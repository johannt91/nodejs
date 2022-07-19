// Exploring the `process` global object and how Node.js deals with exceptions
"use strict";
const fs = require("fs");
const filename = process.argv[2]; //process global object
// console.log([process.argv[0]])
// console.log([process.argv[1]])
console.log([process.argv[2]]);
if (!filename) {
  throw Error("A file to watch must be specified!");
}
fs.watch(filename, () => console.log(`File ${filename} has changed!`));
console.log(`Now watching ${filename} for changes`);

// The process.argv accesses incoming cmd line arguments.
// The argv (argument vector) is array containing node and the full path to the watcher-argv.js
// as its first two elements. The third element, at index 2, is the target file.
/* 
    process.argv[0] = '/Users/johann/.nvm/versions/node/v14.19.1/bin/node'
    process.argv[1] = '/Users/johann/projects/nodejs/filesystem/watcher-argv.js',
    process.argv[2] = 'target.txt'
*/

// To run: `node watcher-argv.js target.txt
// If target filename is not provided, an error will be thrown
