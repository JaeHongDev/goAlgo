const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ");

function solution(last, size) {
  const check = new Array(size).fill(false);

  const dfs = (sequence=[]) => {
    const check_size = check.length;
    // base case
    if(sequence.length == size){
        console.log(sequence.toString().replace(/\,/g,' '));
        return ;
    }
    for(let i = 0;i<last;i++){
        if(!check[i]){
            check[i] = true
            sequence.push(i+1)
            dfs(sequence)
            check[i] = false
            sequence.pop()
        }
    }
  };
  dfs([])
}
solution(Number(n), Number(m));
