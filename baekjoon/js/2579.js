const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

const [n, ...stage] = input;

console.log(n, stage);

const memo = new Array(n).fill(0);
console.log(memo);

memo[0] = stage[0];
memo[1] = Math.max(stage[0] + stage[1], stage[1]);
memo[2] = Math.max(stage[0] + stage[2], stage[1] + stage[2])

for (let i = 3; i < n; i++) {
  memo[i] = Math.max(stage[i] + stage[i - 1] + memo[i - 3], stage[i] + memo[i - 2])
}

console.log(memo[n - 1]);

/*
  1 10
  2 10+20
    20

  3 10+15
    20+15
    10+20+15(x)

  4 10+20+15+25(x)
    10+20+25
    10+15+25
    20+15+25(x)
    20+25


// 6 1 2 3 4 5 6
//1 3 5 6
//0 2 4 5 


  






*/