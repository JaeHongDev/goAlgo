const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [count,inputs] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");
inputs = inputs.split(" ").map(Number);

/**
 *
 * @param {number} count
 * @param {number[]} inputs
 */
function solution(count,inputs){
    inputs = [0,...inputs];
    const cache = new Array(count+1).fill(0);

    for(let i = 1; i <= count; i++){
        for(let j = 1; j <= i; j++){
            cache[i] = Math.max(cache[i], cache[i-j] + inputs[j])
        }
    }
    return cache[count];
}

console.log(solution(Number(count),inputs));
