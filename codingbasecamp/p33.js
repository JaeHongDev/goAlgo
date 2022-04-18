const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
})

r1.question("입력: ",(answer)=>{
    console.log("출력:",answer.split(" ").reverse().join(" "))
    r1.close();
})