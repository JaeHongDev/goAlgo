

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input= Number(fs
    .readFileSync(filePath)
    .trim()
    .toString());
console.log(solution(input));

/**
 * @param {number} input
 */
function solution(input){
    const cache = new Array(input+1).fill(0).map((_,index)=> index);

    cache[1] = 1;
    for(let i = 1; i<=input;i++){
        for(let j=1; j**2 <=i; j++){
            cache[i] = Math.min(cache[i],cache[i- j**2] +1)
        }
    }
    return cache[input];
}
