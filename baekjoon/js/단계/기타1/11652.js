let data = `5
1
2
1
2
1`;
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
[_,...data] = fs
    .readFileSync(filePath)
    .toString().trim().split("\n");

const hash = new Map();

data.forEach((item)=> hash.set(item, hash.has(item) ? hash.get(item) + BigInt(1) : BigInt(1)));



let t = [...hash.entries()]
t = t.sort((a,b) => b[1] > a[1] ? -1 : b[1] < a[1] ? 1 : 0);

let min = t[0][0];

for(let i =1 ; i < t.length; i++){
    if(t[0][1] !== t[i][1]) {
        break;
    }

    min = Math.min(min, t[i][0])
}

console.log(min);

