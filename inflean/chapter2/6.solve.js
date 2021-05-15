const util = require("./util")
module.exports = function () {

    const boards = [
        util.stringToIntArray("10 13 10 12 15"),
        util.stringToIntArray("12 39 30 23 11"),
        util.stringToIntArray("11 25 50 53 15 "),
        util.stringToIntArray("19 27 29 37 27 "),
        util.stringToIntArray("19 13 30 13 19"),
    ]
    const size = 5;
    return solution(size, boards)
}

function solution(size, boards) {
    let max = 0;
    for (let i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (i === 0) {
                if (j === 0) {
                    let crossLeft = 0;
                    let crossRight = 0;
                    for (let k = 0; k < size; k++) {
                        crossLeft += boards[k][k]
                        crossRight += boards[size - k - 1][size - k - 1]
                    }
                    max = Math.max(max, Math.max(crossLeft, crossRight))
                }
            }
        }
    }
    return max;
}