const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
})

const plants=["수성","금성","지구","목성","토성","천완성","해왕성"]
r1.question("입력: ",(answer)=>{
    const inputs = Number(answer)  % 3 
    console.log(`출력: ${  inputs % 3 === 0? "짝" : inputs  } `);
    r1.close();
})