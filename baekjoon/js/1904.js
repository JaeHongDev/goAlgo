const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((item) => parseInt(item))[0];


function solution(number){
    const arr = new Array(number).fill(0);
    arr[1] = 1; 
    arr[2] = 2;
    arr[3] = 3; 

    for(let i = 4; i<= number;i++){
        arr[i] = (arr[i-1] + arr[i-2]) % 15746
    }
    console.log(arr[number])
}
solution(input); 