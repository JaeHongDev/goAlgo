const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(filePath)
    .toString()
    .trim()
let [inputCase, inputs] = data.split("\n");
inputs = inputs.split(" ").map(Number);

console.log(solution(Number(inputCase),inputs));

/**
 * @param {number}inputCase
 * @param {number[]}inputs
 */
function solution(inputCase, inputs) {
    const cache = new Array(inputCase).fill(0);

    for(let i = 0; i < inputCase;i++){

        let sum = 0;
        for(let j=0; j < i;j++){
            if(inputs[i] > inputs[j]) {
                sum = Math.max(sum, cache[j]);
            }
        }
        cache[i] = sum + inputs[i];
    }

    return Math.max(...cache);
}
