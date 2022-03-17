const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split(" ")
    .map(Number)[0];


function solution(number) {
    const memo = new Array(number + 1).fill(0);

    const dfs = (level) => {
        if (memo[level] !== 0) return memo[level];
        let memoCount = number + 10;
        if (level === 1) return 0;
        if (level % 3 === 0) {
            memoCount = Math.min(memoCount, dfs(level / 3) + 1)
        }
        if (level % 2 === 0) {
            memoCount = Math.min(memoCount, dfs(level / 2) + 1)
        }
        memoCount = Math.min(memoCount, dfs(level - 1) + 1);

        return memo[level] = memoCount;
    }
    dfs(number);
    console.log(memo[number]);
}

solution(input);