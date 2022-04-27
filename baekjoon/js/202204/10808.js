const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim()

const hashTable = new Map();
for (let s of inputs) {
    hashTable.set(s, hashTable.has(s) ? hashTable.get(s) + 1 :  1);
}
let answer = [];
for (let i = 97; i <= 122; i++) {
    let c = String.fromCharCode(i);
    answer.push(hashTable.has(c) ? hashTable.get(c) : 0);
}
console.log(answer.join(" "));

