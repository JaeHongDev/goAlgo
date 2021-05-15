const util = require("./util")
module.exports = function () {
    const size = 10;
    const scores = util.stringToIntArray("1 0 1 1 1 0 0 1 1 0    ")
    return solution(size, scores)
}

function solution(size, scores) {
    let cnt = 0;
    let scoresCnt = 1;
    for (let i = 0; i < size; i++) {
        if (scores[i]) {
            cnt += scoresCnt ;
            scoresCnt++;
        } else {
            scoresCnt = 1;
        }
    }

    return cnt;
}