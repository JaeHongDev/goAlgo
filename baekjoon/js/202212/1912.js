const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [inputCase, input] = fs.readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")

input = input.split(" ").map(Number);


/**
 *
 * @param {number} inputCase
 * @param {number[]} input
 */
function solution(inputCase, input) {
    const cache = new Array(inputCase).fill(0);
    cache[0] = input[0];

    for(let i = 1 ; i < inputCase;i++){
        cache[i] = Math.max(cache[i-1] + input[i], input[i]);
    }

    return Math.max(...cache);
}

console.log(solution(Number(inputCase), input));

