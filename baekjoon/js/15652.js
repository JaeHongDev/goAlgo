const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ");

function solution(last, size) {
  const check = new Array(size).fill(false);
  const sequence = []; 
  const dfs = (level) =>{
    
    if ( sequence.length === size) {
        console.log(sequence.toString().replace(/\,/g,' '));
        return ;
    }
    if (level === last +1) {
        return ;
    }
    for(let i = level; i<=last;i++){
        check[i] = true;
        sequence.push(i)
        dfs(i)
        check[i] = false;
        sequence.pop();
    }
  }
  dfs(1)
}
solution(Number(n), Number(m));