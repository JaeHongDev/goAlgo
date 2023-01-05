let data = `5 2
4 1 2 3 5`;
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
data  = fs
    .readFileSync(filePath)
    .toString()
    .trim();
let [[N,K], inputs] = data.split("\n").map(i => i.split(" ").map(Number));

console.log(inputs.sort((a,b) => a-b)[K-1])
