const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
})
// 원빈 원빈 혜원 혜원 혜원 혜원 유진 유진

r1.question("입력: ",(num)=>{
    const hashTable =new Map();

    num.split(" ").forEach(item=>{
        !hashTable.has(item) ? hashTable.set(item,1) : hashTable.set(item,hashTable.get(item)+1)
    })

    let maxUser ={
        count:0,
        username:'none'
    };
    hashTable.forEach((item,name)=>{
        if(maxUser.count < item) { 
            maxUser = {count: item,username:name};

        }
    })
    console.log(maxUser.username);
    r1.close();
})