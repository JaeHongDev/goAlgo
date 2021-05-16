const util = require("./util")
module.exports = function () {

    const str = "found7, time: study; Yduts; emit, 7Dnuof"
    return solution(str)
}

function solution(str = "") {
    const p_str = str.replace(/[^a-z+A-Z]/g,"").split("")
    console.log(p_str);
    console.log(p_str.reverse())
    return p_str === p_str.reverse() ? "YES" : "NO"
}