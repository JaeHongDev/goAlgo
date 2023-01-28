const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [input,...lines]= fs
fs.readFileSync('/dev/stdin')
    .toString().trim().split("\n").map(arr => arr.split(" ").map(Number));

console.log(input);

console.table(lines);
