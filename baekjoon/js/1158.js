const fs = require('fs');
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);
const [cases, count] = input;
const sequence = new Array(cases).fill(0).map((_, index) => index + 1);
const answer = [];
let cnt = 1;
while (sequence.length) {

    if (cnt === count) {
        answer.push(sequence.shift());
        cnt = 1;
        continue;
    }
    sequence.push(sequence.shift());
    cnt++;
}
console.log(`<${answer.join(", ")}>`);