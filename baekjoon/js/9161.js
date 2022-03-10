const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map((item) => parseInt(item));

for(let i =1; i<=input[0];i++){
    solution(input[i])
}
function solution(item) {
    const memo = new Array(item+1).fill(0);
    memo[0] = 0;
    memo[1] = 1;
    memo[2] = 1;
    memo[3] = 1;
    memo[4] = 2;

    for(let i = 5;i<=item;i++){
        memo[i] = memo[i-1] + memo[i-5]         
    }

    console.log(memo[item]);
}