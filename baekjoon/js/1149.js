const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(item => item.split(" ").map(item => parseInt(item)))

function solution() {
    const size = input[0][0];
    let memo = Array.from(Array(size+1), () => Array(3).fill(0))

    for (let i = 1; i <= size; i++) {
        memo[i][0] = Math.min(memo[i-1][1],memo[i-1][2]) + input[i][0];
        memo[i][1] = Math.min(memo[i-1][0],memo[i-1][2]) + input[i][1];
        memo[i][2] = Math.min(memo[i-1][1],memo[i-1][0]) + input[i][2];
    }
    
    console.log(memo);
    console.log(
        Math.min(memo[size][2], Math.min(memo[size][0],memo[size][1]))
    )
}

solution();