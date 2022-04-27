const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const stack = []
const answer = [];
for (let s of input) {
    if (s <= "Z" && s >= "A") answer.push(s);
    if (s === "(") stack.push(s);
    if (s === ")") {    
        while (stack.length && stack[stack.length - 1] !== "(") answer.push(stack.pop());
        stack.pop();
    }
    if (s === "+" || s === "-") {
        while (stack.length && stack[stack.length - 1] !== "(") answer.push(stack.pop());
        stack.push(s);
    }
    if (s === "*" || s === "/") {
        while (stack.length && stack[stack.length - 1] === "*" || stack[stack.length - 1] == "/") answer.push(stack.pop());
        stack.push(s);
    }
}
while (stack.length) answer.push(stack.pop());
console.log(answer.join(""))