const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [cases, sequenceStr] = input;

sequence = sequenceStr.split(" ").map(Number);
const answer = new Array(Number(cases)).fill(-1);
const stack = [[sequence[0], 0]];
for (let i = 1; i < sequence.length; i++) {
    while (stack.length !=0 &&  stack[stack.length - 1][0] < sequence[i]) {
        const [_, index] = stack.pop();
        answer[index] = sequence[i];
    }
    stack.push([sequence[i], i]);
}
console.log(answer.join(" "));