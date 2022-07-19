"use strict";
const fs = require("fs");
fs.writeFile("target.txt", "Hello from Node!", (err)=>{
    if(err) {
        throw err;
    }
    fs.readFile("target.txt", (err,data) => {
        if(err) {
            throw err;
        }
        console.log(data.toString());
    })
})
