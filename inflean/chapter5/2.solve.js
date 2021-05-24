const util = require("./util")
module.exports = function () {
    const p1 = util.stringToIntArray("1 3 9 5 2")
    const p2 = util.stringToIntArray("3 2 5 7 8 ")
    return solution(
        new Array(30000).fill(0).map((_, i) => i),
        new Array(30000).fill(0).map((_, i) => i)
    )
}

function solution(p1, p2) {
    console.time('s1');

    p1.sort((a, b) => a - b)
    p2.sort((a, b) => a - b)

    let p1_max = p1.length;
    let p2_max = p2.length;

    let p1_index = 0;
    let p2_index = 0;

    const answer = [];
    while (true) {
        if (p1_index === p1_max || p2_index === p2_max) {
            break;
        }
        if (p1[p1_index] < p2[p2_index]) {
            p1_index++;
        }
        else if (p1[p1_index] > p2[p2_index]) {
            p2_index++;
        }
        else {
            answer.push(p1[p1_index])
            p1_index++;
            p2_index++;
        }
    }
    console.timeEnd('s1');

    console.time('s2');
    const answer1 = [];
    const hashP = new Set();
    for (let i = 0; i < p1.length; i++) {
        hashP.add(p1[i])
    }

    for (let j = 0; j < p2.length; j++) {
        if (hashP.has(p2[j])) {
            answer1.push(p2[j])
        }
    }
    answer1.sort((a, b) => a - b)
    console.timeEnd('s2');


    return 0;
}

