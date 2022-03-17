const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [A, B, V] = input[0].split(" ");
function solution(A, B, V) {
    let result = ( V - A ) / (A - B) + 1 ; 
    if (result % 1 === 0) console.log(result);
    else console.log(Math.ceil(result));
 
}

solution(Number(A), Number(B), Number(V));
 