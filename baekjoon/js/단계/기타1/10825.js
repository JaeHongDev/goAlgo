let data = `12
Junkyu 50 60 100
Sangkeun 80 60 50
Sunyoung 80 70 100
Soong 50 60 90
Haebin 50 60 100
Kangsoo 60 80 100
Donghyuk 80 60 100
Sei 70 70 70
Wonseob 70 70 90
Sanghyun 70 70 80
nsj 80 80 80
Taewhan 50 60 90
`;

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
 [_,...data] = fs
    .readFileSync(filePath)
    .toString()
    .trim()
     .split("\n");
 console.log(
    data.map(_=> ((a, ...b) => [a, ...b.map(Number)])(..._.split(" ")))
    .sort(([a1,a2,a3,a4],[b1,b2,b3,b4]) => a2 === b2 ? a3 === b3 ? a4 === b4 ?
        a1 < b1 ? -1 : a1 === b1 ? 0 : 1
        : b4 - a4 : a3 - b3 : b2 - a2).map(_ => _[0]).join("\n"))
