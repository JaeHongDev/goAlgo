const util = require("./util")
module.exports = function () {

    const str = "gooG";
    return solution(str.toUpperCase())
}

function solution(str) {
    let cnt = 0;
    const size = str.length;
    for (let i = 0; i < size; i++) {
        if (str[i] === str[size - i - 1]) cnt++
    }
    if (cnt === size) {
        return "YES"
    }
    return "NO"
}