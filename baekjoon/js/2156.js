const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const [N, ...others] = input;

function solution(N, glasses) {
    const memo = new Array(N).fill(0);
    if (N === 1) return glasses[0];
    if (N === 2) return glasses[0] + glasses[1];
  // 3연속으로 마실 수 없습니다.
  // 한번 마시면 다마셔야하고 제자리에 두어야합니다. 
    memo[1] = glasses[0]; 
    memo[2] = glasses[0] + glasses[1]; 

    
    for(let i = 3;i<=N;i++){
        //Math.max(dp[i-3] + wine[i-2] + wine[i-1], dp[i-2] + wine[i-1], dp[i-1]);
        memo[i] = Math.max(glasses[i-1]+glasses[i-2] + memo[i-3],memo[i-2] + glasses[i-1], memo[i-1]);
      }
    console.log(memo[N]);
}

solution(N, others);

// 1 2 3 4 5 6
// 1 2 4
// 1 2 5 
// 