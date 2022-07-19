// Spawn child processes in response to changes using Node.js `child-process`
// `child_process` enables us to access Operating System functionalities by running a system command inside of a subprocess
'use strict';
const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

if(!filename) {
    throw Error('A file to watch must be specified!');
}

fs.watch(filename, ()=> {
    const ls = spawn('ls', ['-l', '-h', filename]);
    let output = "";

    ls.stdout.on('data', chunk => output += chunk); // child process output stream
    ls.on('close', () => {
        const parts = output.split(/\s+/);
        console.log([parts[0], parts[4], parts[8]]); // [permissions, size, filename]
    });
});
console.log(`Now watching ${filename} for changes...`);

// spawn is the name of the program to be executed; `ls`
/* 
the object returned by spawn() is a ChildProcess where the `stdin`, `stdout`, and `stderr` properties are Streams that
can be used to read or write data.

The pipe() method sends stdout from the child process directly to our ouwn stdout stream
*/