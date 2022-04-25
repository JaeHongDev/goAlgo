const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const [cases, ...sequence] = input;


const store = [];
const answer = [];
let pos = 0;
for (let i = 1; i <= cases; i++) {
    answer.push("+")
    store.push(i);
    if (i === sequence[pos]) {
        store.pop();
        answer.push("-");
        pos++;
        while (sequence[pos] === store[store.length - 1] && pos <= sequence.length-1) {
            store.pop()
            answer.push("-");
            pos++;
        }
    }
}
if (store.length === 0) {
    console.log(answer.join("\n"))
    return;
}
console.log("NO");
/*
 1 2 5 7

 4 3 6 8
 pop이 일어난 경우 바로 직전의 값 과 다음에 올 수열의 값을 비교 한다.

 */

