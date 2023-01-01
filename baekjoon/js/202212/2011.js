
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("").map(Number);
function solution(input){
    const cache = new Array(input.length+1).fill(0);
    if(input[0] === 0){
        return 0;
    }
    cache[0] = 1;
    cache[1] = 1;
    for(let i = 2; i <= input.length; i++){
        cache[i] = input[i] === 0 ? 0 : (cache[i-1] + cache[i]) % 1000000;

        const x = input[i-1] + input[i-2] * 10;

        if(x >= 10 && x <= 26){
            cache[i] = (cache[i - 2] + cache[i]) % 1000000;
        }
    }
    return cache[input.length];
}
console.log(solution(input));
