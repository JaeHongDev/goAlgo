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
console.log( 10 + 40  + 50 + 100 + 80)
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

console.log(+"111" + 2);


/**
 *
 * @param {number}size
 * @param {number[][]}arr
 * @return string
 */
function solution(size,arr){
    const cache = new Array(size+1).fill(0);

    cache[0] = Math.max(arr[0][0], arr[0][1]);
    cache[1] = Math.max(arr[1][0] + arr[0][1], arr[1][1] + arr[0][0])

    cache[2] = cache[0] + Math.max(arr[0][2] + arr[1][2] , arr[1][1] + arr[0][2]);
    for(let i = 2; i < size;i++){
        const temp = cache[i-2] +Math.max(arr[0][i] + arr[1][i-1], arr[0][i]+ arr[1][i-1]);
        const temp1 = cache[i-1] + Math.max(arr[0][i] , arr[1][i]);
        cache[i] = Math.max(temp,temp1);
    }
    console.table(cache);
    return cache[size-1]
}

// 123


/**
 * 50 <- 10
 * 50 <- 50
 * 30 <- 50
 *
 *
 */
