const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = fs.readFileSync(filePath).toString().trim();
const answer = [];
for (let i = 0; i < input.length; i++) {
    answer.push(input.substr(i, input.length));
}
answer.sort()
console.log(answer.join("\n"));