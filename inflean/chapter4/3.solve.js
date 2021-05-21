const util = require("./util")
module.exports = function () {
    const [N, M] = [3, 4];

    const students = [
        util.stringToIntArray("3 4 1 2 "),
        util.stringToIntArray("4 3 2 1"),
        util.stringToIntArray("3 1 4 2"),
    ]

    return solution(N, M, students)
}

function solution(N = 3, M = 4, students = [[]]) {
    const answers = [];
    for (let i = 0; i < students.length - 1; i++) {
        for (let j = 0; j < students[i].length - 1; j++) {
            for (let k = j + 1; k < students[i].length; k++) {
                
            }
        }

    }

    return 0;
}