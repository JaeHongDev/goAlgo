const fs = require('fs');
const filePath = process.platform === 'linux' ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [casesStr, operationStr,...numbersStr] = input;

const numbers = numbersStr.map(Number);
const convertNum = (s = '') => numbers[s.charCodeAt() - 65];
const stack = [];
const hashTable = new Map();
let cnt = 0;
for (let s of operationStr.trim()) {
    if (s.charCodeAt() >= 65) {
        hashTable.has(s) ? "" : hashTable.set(s, convertNum(s));
        stack.push(s);
        continue;
    }
    let p1 = hashTable.get(stack.pop());
    let p2 = hashTable.get(stack.pop());
    stack.push(cnt);
    if (s === "+") {
        hashTable.set(cnt, p1 + p2);
    }
    if (s === "-") {
        hashTable.set(cnt, p2 - p1); 
    }
    if (s === "*") {
        hashTable.set(cnt, p2 * p1);
    }
    if (s === "/") {
        hashTable.set(cnt, p2 / p1);
    }
    cnt++;
}
console.log(hashTable.get(stack.pop()).toFixed(2));

// stack
/*
 A B C
 A 0 
 1 D E
 1 2
 3
 */