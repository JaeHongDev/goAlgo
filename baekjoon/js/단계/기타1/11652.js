
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
[_,...data] = fs
    .readFileSync(filePath)
    .toString().trim().split("\n").map(Number);

const map = new Map();

for(let i = 0 ; i< data.length;i++){
    map.set(data[i], map.has(data[i]) ? map.get(data[i])+1n : 1n);
}
console.log(map);
const result = [...map.entries()].sort((a,b)=> {
    if(b[1] > a[1]) return  1;
    if(b[1] < a[1]) return -1;
    return 0;
});

let answer = result[0][0]
let nowNumber = result[0][1]

for(let i = 1 ; i < result.length;i++){
    if(nowNumber !== result[i][1]){
        break;
    }
    answer = Math.min(answer,result[i][0]);
}

console.log(String(answer));


