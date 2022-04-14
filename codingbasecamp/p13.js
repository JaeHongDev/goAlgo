const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
})

const plants=["수성","금성","지구","목성","토성","천완성","해왕성"]
r1.question("입력: ",(answer)=>{
    console.log(`출력:${plants[Number(answer)-1]} `);
    r1.close();
})