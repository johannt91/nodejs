## Topics covered
### Interacting with the Filesystem
- Watching a File for Changes: watcher.js using fs.watch()
- Visualizing the Event Loop by watching the file as a command-line argument using the `process` global object: watcher-argv.js using process.argv
- Spawning a Child Process to explore some NOde.js patterns and classes as well as use streams to pipe data: watcher-spawn.js
- Read and Write Files asynchronously: read-simple.js, readwrite-simple.js
- Creating Read and Write Streams as well as making the Node.js program an executable using chmod: rw-stream.js

Synchronized file access is best done during initialization phase of program, never in the operation phase.