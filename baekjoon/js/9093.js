const fs = require('fs');
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./input.txt";

const result = fs
    .readFileSync(filePath)
    .toString()
    .split("\n")
    .map(item => item.trim());
const [cases, ...strings] = result;

const answer = strings.reduce((pre,string)=> {
    return pre += `${string.split(" ").map(item => item.split("").reverse().join("")).join(" ")}\n`; 
}, "");
console.log(answer);
