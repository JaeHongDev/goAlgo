
let data = `5
5
4
3
2
1`;
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
data  = fs
    .readFileSync(filePath)
    .toString()
    .trim();
[_, ...data] = data.split("\n").map(Number);


console.log(data.sort((a,b)=> a-b).join("\n"));
