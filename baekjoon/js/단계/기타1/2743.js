const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const data = fs.readFileSync(filePath)
    .toString()
    .trim()
console.log(data.length);
