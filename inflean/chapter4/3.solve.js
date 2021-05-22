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
    let answers = [];
    for (let i = 0; i < students.length - 1; i++) {
        for (let j = 0; j < students[i].length - 1; j++) {
            for (let k = j + 1; k < students[i].length; k++) {
                answers.push([students[i][j], students[i][k]])
            }
        }
    }
    const returnValue = []
    for (let i = 0; i < answers.length - 1; i++) {
        let check = false;
        for (let j = i; j < answers.length, check === false; j++) {
            if (answers[i][0] === answers[j][0] && answers[i][1] === answers[j][1]) { check = true; break }
            else if ((answers[i][0] === answers[j][1] && answers[i][1] === answers[j][0]) && answers[i][0] < answers[j][1]) { check = true; break }
        }
        if(!check)  {
            console.log(answers[i])
            console.log(1)
        }
    }
    console.log(returnValue)
    return 0;
}

function solution1(test) {
    let answer = 0;
    m = test.length;
    n = test[0].length;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            let cnt = 0;
            for (let k = 0; k < m; k++) {
                let pi = pj = 0;
                for (let s = 0; s < n; s++) {
                    if (test[k][s] === i) pi = s;
                    if (test[k][s] === j) pj = s;
                }
                if (pi < pj) cnt++;
            }
            if (cnt === m) answer++;
        }
    }
    return answer;
}

let arr = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));