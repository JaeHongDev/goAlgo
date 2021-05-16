const util = require("./util")
module.exports = function () {

    const str = "gooG";
    const alpha = ['a','b','c','d','e']
    const s = new Array(10000).fill(0).map((_,index)=> alpha[index % 5]).toString("")
    return solution(s)
}

function solution(str) {
    console.time("s1")
    let cnt = 0;
    const size = str.length;
    for (let i = 0; i < size; i++) {
        if (str[i] === str[size - i - 1]) cnt++
    }
    if (cnt === size) {
    }
    console.timeEnd("s1")
    console.time("s2")
    str.split("").reverse().join("") === str ? "YES" : "NO"
    console.timeEnd("s2")
}