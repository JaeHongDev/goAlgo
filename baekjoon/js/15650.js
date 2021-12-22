const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ");
function solution(last, size) {
  const check = new Array(size).fill(false);
  const dfs = (level = 0, sequence = []) => {
    if (level == last+1 ) {
      if (sequence.length == size) {
        console.log(sequence.toString().replace(/\,/g,' '));

      }
      return;
    }
    sequence.push(level);
    check[level] = true;
    dfs(level + 1, sequence);
    sequence.pop();
    check[level] = false;
    dfs(level + 1, sequence);
  };
  dfs(1, []);
}
solution(Number(n), Number(m));
