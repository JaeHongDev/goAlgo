const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(item=>item.split(" ").map(Number));
const checkFactor = (a,b)=> {
    console.log(a,b);
    console.log(b%a) ;
    return b % a  === 0
} 

input.forEach(([first,last])=>{
    if(first >= last) {
        // 첫번째가 2번째의 약수인 경우
        if(checkFactor(last,first )){
            console.log("factor");
            return ;
        }
        console.log("neither");
        return; 
    }
    if(checkFactor(last,first)){ 
        console.log("factor");
        return ;
    }
    console.log("neither");
    
})