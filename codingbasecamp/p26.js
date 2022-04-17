const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
})

const plants=["수성","금성","지구","목성","토성","천완성","해왕성"]







const hashTable= new Map();
hashTable.set("수성","Mercury"); 
hashTable.set("화성","Venus");
hashTable.set("금성","Earth");
hashTable.set("지구","Mars");
hashTable.set("목성","Jupiter");
hashTable.set("토성","Saturn ");
hashTable.set("천완성","Urarnus");
hashTable.set("해왕성","Neptune");

r1.question("입력: ",(answer)=>{
    console.log(`출력: ${ hashTable.get(answer)}`);
    r1.close();
})