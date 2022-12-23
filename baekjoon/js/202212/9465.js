/*const data = `2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`;*/

/**
 *
 * 30
 * 50 -> 30
 * 50 -> 10
 *
 * 80 -> 50
 * 60 -> 50
 *
 * 50
 * 20 30 30 [1,0] [1,0] [1,2]
 * 20 30 50 [1,0] [1,0]
 * 10 40 50 [0,0] [1,1]
 *
 * 50
 * 10 40 10
 * 20 30 50
 * 10 40 50
 *
 */
// 20 40
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let [inputCase, ...inputs] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n");

inputCase = Number(inputCase);

let answer = "";
for(let i = 0 ; i <inputs.length; i+=3){
    answer += solution(Number(inputs[i]),
        [inputs[i+1].split(" ").map(Number),
            inputs[i+2].split(" ").map(Number)
        ]) + "\n";
}

console.log(answer);

/**
 *
 * @param {number}size
 * @param {number[][]}arr
 * @return string
 */
function solution(size,arr){
    const cache = new Array(2).fill(0).map(_ => new Array(size+1).fill(0));

    cache[0][0] = 0;
    cache[1][0] = 0;

    cache[0][1] = arr[0][0];
    cache[1][1] = arr[1][0];


    for(let i = 2; i <=size+1;i++){
        const temp = Math.max(cache[0][i-2], cache[1][i-2])
        cache[0][i] = Math.max(cache[1][i-1] + arr[0][i-1] , temp + arr[0][i-1]);
        cache[1][i] = Math.max(cache[0][i-1] + arr[1][i-1]  , temp + arr[1][i-1]);
    }
    return Math.max(cache[0][size],cache[1][size]).toString();
}

// 123


/**
 * 50 <- 10
 * 50 <- 50
 * 30 <- 50
 *
 *
 */
