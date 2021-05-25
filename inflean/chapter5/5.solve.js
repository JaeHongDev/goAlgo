const util = require("./util")
module.exports = function () {

    const k = 3
    const p = util.stringToIntArray("12 15 11 20 25 10 20 19 13 15");
    

    return solution(p, k)
}

function solution(p, k) {

    let sum = 0;
    let answer = 0;
    for (let i = 0; i < k; i++) {
        sum += p[i]
    }
    for (let i = k; i < p.length; i++) {
        answer = Math.max(answer, sum += p[i] - p[i - k])
    }
    return answer;
}