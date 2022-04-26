const fs = require('fs');
const filePath = process.platform === 'linux' ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [cases, sequenceStr] = input;
const answer = new Array(Number(cases)).fill(-1);
const hashTable = new Map();
const sequence = sequenceStr.split(" ").map(item => {
    const value = Number(item);
    hashTable.set(value, hashTable.has(value) ? hashTable.get(value)+1: 1);
    return value;
});

const stack = [[sequence[0], 0]];
for (let i = 1; i < cases; i++) {
    while (stack.length && hashTable.get(stack[stack.length - 1][0]) < hashTable.get(sequence[i])) {
        const [item, index] = stack.pop();
        answer[index] = sequence[i];
    }
    stack.push([sequence[i], i]);
}
console.log(answer.join(" "));