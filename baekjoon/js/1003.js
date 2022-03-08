const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(item=>parseInt(item));

function solution(num){
    const count = new Array(42).fill(null);
    const sum = (arr,arr1) =>{
        return [arr[0] + arr1[0], arr[1] + arr1[1]]
    }
    count[0] = [0,1];
    count[1] = [1,0]
    //2 
    const fibo = (n) =>{
        if(n === 0) return count[0];
        if(n === 1) return count[1];
        if(count[n] !== null) return count[n];
       return count[n] = sum(fibo(n-2),fibo(n-1));
    }
    fibo(num);
    console.log(count[num][1],count[num][0]);
}

for(let i = 1; i < input.length;i++) solution(input[i]);




