const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const bracketStack = [];
let answer = 0;
const strSize = input.length;
for (let i = 0; i < strSize; i++) {
    let s = input[i];
    if (s === "(") bracketStack.push("(");
    if (s === ")") {
        bracketStack.pop();
        if (input[i - 1] === "(") {
            answer += bracketStack.length;
        }
        if (input[i - 1] === ")") {
            answer += 1;
        }
    }
}
console.log(answer);