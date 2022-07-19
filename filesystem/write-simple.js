'use strict';
const fs = require('fs');
fs.writeFile('target.txt', 'Hello from node!', (err) => {
    if(err) {
        throw err;
    }
    console.log("File Saved!")
})