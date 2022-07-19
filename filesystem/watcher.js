'use strict'; // execute program in strict mode to disable problematic JS features
const fs = require('fs');
fs.watch('target.txt', () => console.log('File Changed!'));
console.log('Now watching target.txt for changes...');