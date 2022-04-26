const fs = require('fs');
const filePath = process.platform === 'linux' ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const [casesStr, operationStr,...numbersStr] = input;

const numbers = numbersStr.map(Number);

const convertNum = (s = '') => numbers[s.charCodeAt() - 65];

const stack = [];
let answer = 0;
let temp = 0;
for (let s of operationStr) {
    if (s.charCodeAt >= 65) {
        stack.push(s);
        continue;
    }
    let p1, p2;
    if (stack.length === 1) {
        p1 = stack.pop();
    } else {
        p1 = stack.pop();
        p2 = stack.pop();
    }
    if (s === "*") {
        if (stack.length == 1) {
            answer = answer * convertNum(p1)
            continue;
        }
        answer = convertNum(p2) * convertNum(p1);
    }
    if (s === "-") {
        if (stack.length == 1) {
            answer = answer - convertNum(p1)
            continue;
        }
        answer = convertNum(p2) - convertNum(p1);
    }

    if (s === "+") {
        if (stack.length == 1) {
            answer = answer + convertNum(p1)
            continue;
        }
        answer = convertNum(p2) + convertNum(p1);
    }

}
console.log(stack);
