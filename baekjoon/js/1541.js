/*
    세준이는 양수와 +,- , 그리고 괄호를 가지고 식을 만들었다/ 그리고 나서 세준이는 괄호를 모두 지웠다.
    그리고 나서 세준이는 괄호를 적절히 쳐서 이식의 값을 최소로 만들려고 한다.

    0~9 + - 로 이루어져있으며 가장 처음과 마지막 문자는 숫자이다. 그리고 연속해서 두 개 이상의 연산자가 나타나지 않으며
    5자리보다 많이 연속되는 숫자는 없다.
*/

// 55 - 50 + 40

// 55 - 50 + 40
// - (수가 커야함)
/// 반복해서 돌다가 - 를 만나면
// 뒤에서 부터 다 더해봄
// 또 뒤에서 마이너스가 보이면 다시 더해봄 
// 만약 빼려고 하는 수보다 작으면 
// 55 - 5 + 40
// 50 + 40
// 10 
// 어떤 수가 오더라도 -가 있으면 뒤에 전부 더한다.

// 55 - 5 + 40 - 5 + 40
// 55 - (5 + 40) - (5+40)
// - ()


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input  = fs
.readFileSync(filePath)
.toString()
.trim()
.split(/([-,+])/g);

let sum = 0; 
let temp = 0;
let check = false;
for(let i = 0; i <input.length;i++) {
    console.log(sum,temp);
    if(input[i] === "-"){
       if(check) {
           sum -= temp;
           temp = 0;
           continue;
       }
       check = true;
       continue;
    }  
    if(input[i] === "+") continue;
    if(check){
        temp += Number(input[i]);
        continue; 
    }
    sum+=  Number(input[i]); 
}
console.log(sum,temp);
if(temp !== 0) sum-= temp;
console.log(sum);
// 10000000 - 1 + 1 - 90 + 2