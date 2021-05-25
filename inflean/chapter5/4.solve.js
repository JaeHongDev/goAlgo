const util = require("./util")
module.exports = function () {

    const p = util.stringToIntArray("1 3 1 2 3");
    const k = 5;
    return solution(p, k)
}

function solution(p, k) {

    let lt = 0
    let sum = 0
    let cnt = 0;
    const size = p.length;
    for (let rt = 0; rt < size; rt++) {
        console.log(rt,lt)
        sum += p[rt];
        while (sum > k) { sum -= p[lt++] }
        cnt += (rt - lt + 1)
    }
    console.log(cnt)
    return 0;
}