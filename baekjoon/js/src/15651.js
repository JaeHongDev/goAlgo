const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ");
let answer = ""
function solution(last, size) {

  const dfs = (sequence = []) => {
    // base case
    if (sequence.length == size) {
      answer += sequence.toString().replace(/\,/g, " ")+"\n"
      return;
    }
    for (let i = 0; i < last; i++) {
      sequence.push(i + 1);
      dfs(sequence);
      sequence.pop();
    }
  };
  dfs([]);
  console.log(answer)
}
solution(Number(n), Number(m));
