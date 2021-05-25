const util = require("./util")
module.exports = function () {

    const p = util.stringToSplitArray("BACBACCACCBDEDE")
    return solution(p)
}

function solution(p) {
    const hash = new Map();
    for (let i = 0; i < p.length; i++) {
        if (hash.has(p[i])) {
            hash.set(p[i], hash.get(p[i]) + 1)
        }
        if (!hash.has(p[i])) {
            hash.set(p[i], 0)
        }
    }
    let answer = 0;
    hash.forEach(item => answer = Math.max(answer, item))
    console.log(answer)
    return 0;
}