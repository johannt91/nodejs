# Networking with Sockets

The following aspects of Node.js will be explored through developing socket-based servers and clients:

- Node.js Core
    - Exploring how to extend Node.js classes such as `EventEmitter` and create custom modules to hosue reusable code
- Patterns
    - Exploring common endpoint patterns as well as JSON-base protocol for client/server communication
- JavaScriptisms
    - Using Node.js's utilities for creating class hierarchies.
- Supporting code
    - Develop a unit test with Mocha

## Topics covered
### Listening for Socket Connections

```
"use strict";
const fs = require("fs");
const net = require("net");
const filename = process.argv[2];

if (!filename) {
  throw Error("Error: No filename specified.");
}
net.createServer((connection) => {
  // Reporting.
  console.log('Subscriber now connected.'); // connected to client and console
  connection.write(`Now watching "${filename}" for changes...\n`);
  
  // Watcher setup
  const watcher = 
      fs.watch(filename, ()=> connection.write(`File changed: ${new Date()}\n`));
  
  // Cleanup
  connection.on('close', ()=>{
      console.log('Subscriber disconnected.');
      watcher.close();
  });
}).listen(60300, ()=> console.log("Listening for subscribers..."));
```
To run this code

1. **Terminal 1** use the watch command to touch the target file at one interveral seconds:
```
watch -n 1 touch target.txt
```

2. **Terminal 2**  start the program to begin listening for subscribers on TCP port 60300:
```
node net-watcher.js target.txt
```

3. **Terminal 3** using the netcat socket utility program to connect to the port:
```
nc localhost 60300
```
or use
```
telnet localhost 60300
```
if your system does not have netcat.

TCP sockets are better for communicating over networked computers. Unix sockets are more efficient for communicating processes locally.

To connect using Unix socket, the port in `.listen()` is updated to `'/tmp/watcher.sock`. After preparing the program to listen for subscribers, we can connect to a client using:
```
nc -U /tmp/watcher.sock
```