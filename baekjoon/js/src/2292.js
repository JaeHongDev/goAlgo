const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input= Number(input[0]);
let count = 0;
let pos = 1;
let check = 1;
while(true){
    if(pos >= input){
        console.log(check)
        break;
    }
    count += 6;
    pos += count; 
    check++ ;
}