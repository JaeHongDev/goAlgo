const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(filePath)
    .toString()
    .trim()
let [inputCase, inputs] = data.split("\n");
inputs = inputs.split(" ").map(Number);


console.log(solution(Number(inputCase), inputs));

/**
 *
 * @param {number}inputCase
 * @param {number[]}inputs
 */
function solution(inputCase, inputs){
    const cache = new Array(inputCase).fill(0);

    for(let i = 0; i <inputCase;i++){
        let cnt = 1;
        for(let j = i; j >= 0; j--){
            if(inputs[i] < inputs[j]) {
                cnt = Math.max(cnt, cache[j] + 1);
            }
        }
        cache[i] = cnt;
    }
    return Math.max(...cache);
}
