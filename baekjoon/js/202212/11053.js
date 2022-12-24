let data = `6
10 20 10 30 20 50`;

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

data = fs.readFileSync(filePath)
    .toString()
    .trim()
let [inputCase, inputs] = data.split("\n");
inputs = inputs.split(" ").map(Number);

console.log(solution(Number(inputCase), inputs));
/**
 *
 * @param {number} inputNumber
 * @param {number[]}input
 */
function solution(inputNumber,input){

    const cache = new Array(inputNumber+1).fill(0);

    cache[1] = 1;
    cache[2] = input[0] > input[1] ? 1 : 2;

    function findLargestNumber(i) {
        for (let j = i - 1; j > 0; j--) {
            if (input[i] < input[j]){
                continue;
            }
            if (input[j] > input[j - 1]) {
                return j;
            }
        }
        return 0;
    }

    for(let i = 3; i<=inputNumber;i++){
        const largestCachedNumber = findLargestNumber(i);
        cache[i] = cache[largestCachedNumber] + 1;
    }
    return cache[inputNumber];
}

/**
 * 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.
 *
 * 예를 들어, 수열 A = {10, 20, 10, 30, 20, 50} 인 경우에 가장 긴 증가하는 부분 수열은 A = {10, 20, 10, 30, 20, 50} 이고, 길이는 4이다.
 *
 * 10 20 30 50
 * //4
 * 10 20
 *
 * 20
 * 10 20  30
 *
 * cache[3] = 0
 * cache[4] = 10 20 30
 * cache[5] = 10
 */
function description(){

    /**
     * 3: 10
     * 20x 10
     * 10
     * 30
     * 10, 20
     * 10, 20,  30
     *
     *
     */
}
