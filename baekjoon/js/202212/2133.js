const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input= Number(fs
    .readFileSync(filePath)
    .toString());


function solution(input) {
    if(input %2 !== 0) return 0;
    let answer = 0;
    const cases = [0,2]
    const p = [];
    const dfs = (num) =>{
        const sum = p.reduce((pre,cal) => pre+cal,0);
        if(sum > input){
            return ;
        }
        if(sum === input){
            console.log(p);
            answer += p.reduce((pre,cal) => (cal===2 ? 3 : 2) * pre ,1)
            return ;
        }
        cases.forEach(n =>{
            p.push(num+n);
            dfs(num+n);
            p.pop();
        })
    }
    dfs(2 );
    return answer;
}
console.log(solution(input));
