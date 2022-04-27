const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim()

const hashTable = new Map();
for (let i = 0; i < inputs.length; i++) {
    let s = inputs[i];
    hashTable.has(s) ? "" : hashTable.set(s, i); 
}
let answer = [];
for (let i = 97; i <= 122; i++) {
    let c = String.fromCharCode(i);
    answer.push(hashTable.has(c) ? hashTable.get(c) : -1);
}
console.log(answer.join(" "));

