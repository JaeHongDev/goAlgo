const util = require("./util")
module.exports = function () {
    const p = util.stringToIntArray("1 2 1 3 1 1 1 2")
    const max = 6;

    return solution(p, max)
}

function solution(p, k) {
    const size = p.length;

    console.time('s1');


    let lt = 0;
    let rt = 0;
    let answer = 0;
    let sum = 0

    while (rt < size) {
        if (sum < k) {
            sum += p[rt++]
        } else if (sum === k) {
            sum += p[rt++]
            answer++;
        } else {
            sum -= p[lt++]
        }
    }
    console.timeEnd('s1');


    console.time('s2');

    solution1(k, p)
    console.timeEnd('s2');

    return answer;
}
function solution1(m, arr) {
    let answer = 0, lt = 0, sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum === m) answer++;
        while (sum >= m) {
            sum -= arr[lt++];
            if (sum === m) answer++;
        }
    }
    return answer;
}