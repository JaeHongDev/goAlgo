// JavaScript source code
const fs = require('fs');
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();


const answer = [];
let flag = false;
let temp = [];

for (let s of input) {

    if (s === "<") {
        flag = true;
        answer.push(...temp.reverse());
        temp = [];
    }
    if (flag) {
        answer.push(s);
    }

    if (!flag) {
        if (s === " ") {
            answer.push(...temp.reverse(), s);
            temp = [];
        } else {
            temp.push(s);
        }
    }


    if (s === ">") {
        flag = false;
    }
}
if (temp.length !== 0) answer.push(...temp.reverse());
console.log(answer.join("").trim());