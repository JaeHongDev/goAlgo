const util = require("./util")
module.exports = function () {
    const size = 5;
    const boards = [
        util.stringToIntArray("0 0 0 0 0 0 0"),
        util.stringToIntArray("0 5 3 7 2 3 0"),
        util.stringToIntArray("0 3 7 1 6 1 0"),
        util.stringToIntArray("0 7 2 5 3 4 0"),
        util.stringToIntArray("0 4 3 6 4 1 0"),
        util.stringToIntArray("0 8 7 3 5 2 0"),
        util.stringToIntArray("0 0 0 0 0 0 0")

    ]
    return solution(size, boards)
}

function solution(size, boards) {
    let cnt = 0;
    for (let i = 1; i <= size; i++) {
        for (j = 1; j <= size; j++) {
            if (boards[i][j] > boards[i - 1][j]) {
                if (boards[i][j] > boards[i + 1][j]) {
                    if (boards[i][j] > boards[i][j + 1]) {
                        if (boards[i][j] > boards[i][j - 1]) {
                            cnt++
                        }
                    }
                }
            }
        }
    }
    return cnt;

}