const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin, 
//     output:process.stdout
// })
// 원빈 원빈 혜원 혜원 혜원 혜원 유진 유진
// 97 86 75 66 55 97 85 97 97 95
// r1.question("입력: ",(num)=>{
//     r1.close();
// })

const input = "97 86 75 66 55 97 85 97 97 95";

const scores = input.split(" ").map(Number);

scores.sort((a,b)=>b-a);
console.log(scores);
let cnt = 0;
let sequence = 0;
let score = 999;
scores.forEach(item=>{
    if(sequence === 3) {
        console.log(cnt);
        return ;
    }
    if(score > item){
        score = item;
        cnt++;
        sequence++;
        return ;
    }
    if(item == score ){ 
        cnt++;
    }
})
