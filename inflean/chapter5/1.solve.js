const util = require("./util")
module.exports = function () {
    const p = util.stringToIntArray("1 3 5 ")
    const p1 = util.stringToIntArray("2 3 6 7 9")

    return solution(p, p1)
}

function solution(p = [], p1 = []) {
    const p_max = p.length;
    const p1_max = p1.length;

    const answer = [];

    let p_index = 0;
    let p1_index = 0;
    while (true) {
        if (p_index === p_max) {
            answer.push(...p1.slice(p_index))
            break;
        }
        if (p1_index === p1_max) {
            answer.push(...p.slice(p_index))
            break;
        }
        if (p[p_index] <= p1[p1_index]) {
            answer.push(p[p_index++]);
        }
        else {
            answer.push(p1[p1_index++])
        }
        if (p_index === p_max && p1_index === p1_max) break;
    }
    console.log(answer)
    return 0;
}