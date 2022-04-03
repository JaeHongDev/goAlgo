const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const N = Number(input[0]);
const sequence = input[1].split(" ").map(Number);
console.log(N, sequence);

function solution(N, sequence) {
    
    let count = 1;
    let answer = 0;
    for(let i = 1;i<N;i++){
        if(sequence[i] <= sequence[i-1]){
            answer = Math.max(answer,count);
            count = 1;
            continue;
        }
        count++;
    }

    console.log(answer);

}
solution(N, sequence);
