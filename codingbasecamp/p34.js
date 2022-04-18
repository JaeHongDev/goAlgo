const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin, 
    output:process.stdout
})

r1.question("입력: ",(answer)=>{
    const nums =  answer.split(" ").map(Number);
    for(let i = 1; i<nums.length; i++){
        if(nums[i-1] > nums[i]) {
            console.log("출력 : NO")
            r1.close();
            return ;
        } 
    }  
    console.log("출력: YES")
    r1.close();
})