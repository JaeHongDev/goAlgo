const util = require("./util")
module.exports = function () {
    const scores = util.stringToIntArray(
        "87 89 92 100 76"
    )
    const size = 5;
    return solution(size, scores)
}

function solution(size, scores) {

    const answers = new Array(size).fill(1)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (scores[i] < scores[j]) answers[i]++
        }
    }
    return answers;
}

/*
    기준 점을 구한다.
    10 10 10 20 30 40

*/