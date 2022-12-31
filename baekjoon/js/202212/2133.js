const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input= Number(fs
    .readFileSync(filePath)
    .toString());


function solution(input) {
    const cache = new Array(input+1).fill(0);

    cache[0] = 1;
    cache[2] = 3;
    for(let i = 4;i<=input;i++){
        cache[i] = cache[i-2] * 3;
        for(let j=4; j<=i ; j+=2){
            cache[i] += cache[ i - j] * 2;
        }
    }
    return cache[input];
}
console.log(solution(input));
