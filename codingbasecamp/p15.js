const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
})

r1.question("입력: ",(answer)=>{
    console.log(`출력: 안녕하세요. 저는 김다정입니다. ${ answer } `);
    r1.close();
})