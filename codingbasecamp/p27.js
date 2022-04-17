const readline = require('readline');
const input = "Yujin Hyewo\n70 100".split("\n").map(item=>item.split(" "));

const answer ={};
input[0].forEach((item,index)=>answer[item] = input[1][index])
console.log(answer);