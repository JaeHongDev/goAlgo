const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const inputs = fs
    .readFileSync(filePath).toString().split("\n").map(item => item.trim());

console.log(inputs);
const [cases, ...brackets] = inputs;
function solution(bracekts = []) {
    const answer = [];
    brackets.forEach(item => {
        let cnt = 0;
        for (let i = 0; i < item.length; i++) {
            cnt += item[i] === "(" ? 1 : -1;

            if (cnt < 0) break;

        }
        answer.push(cnt === 0 ? "YES" : "NO");
    });
    console.log(answer.join("\n"));
}
solution(brackets);

