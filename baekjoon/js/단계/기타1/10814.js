let data = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
data  = fs
    .readFileSync(filePath)
    .toString()
    .trim();
 [_,...data ] = data.split("\n")
 console.log(data.map((_,index)=>((a,b)=> [Number(a), b, index])(..._.split(" ")))
     .sort(([a,_,i], [b,__,j])=> a === b ? i - j : a - b )
     .map(([a,b,_]) => `${a} ${b}` )
     .join("\n"));
