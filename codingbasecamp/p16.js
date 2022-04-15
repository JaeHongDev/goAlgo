const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
})

r1.question("입력: ",(answer)=>{
    const result = answer.split("").reverse().join('').toString();
    console.log(`출력:${result}`);
        r1.close();
})