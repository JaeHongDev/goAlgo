

/**
 * 첫 시도
 * 211915132
 * time1: 539.963ms
 *
 * 2차 시도
 * 211915132
 * time1: 12.85ms
 */
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N,K]= fs
    .readFileSync(filePath)
    .toString()
    .split(" ").map(Number);
/**
 *
 * @param {number} N
 * @param {number} K
 */
function solution(N,K){
    if(K === 1) return 1;
    const cache = new Map();

    const cal = (k , splitNumber) =>{
        let sum = 0;

        if(splitNumber === 2){
            return k+1;
        }
        const key = `${k}:${splitNumber}`
        if(cache.has(key)){
            return cache.get(key);
        }
        for(let i = 0 ; i <= k;i++){
            sum += cal(i, splitNumber-1)
        }
        const result = sum % 1000000000;
        cache.set(key ,result);
        return  result
    }
    return cal(N,K);
}
console.log(solution(N,K));
