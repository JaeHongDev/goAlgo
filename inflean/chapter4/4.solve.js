const util = require("./util")
module.exports = function () {

    const arr = [
        util.stringToIntArray("6 6 "),
        util.stringToIntArray("2 2 "),
        util.stringToIntArray("4 3 "),
        util.stringToIntArray("4 5 "),
        util.stringToIntArray("10 3"),
    ]
    const price = 28;
    return solution(arr, price)
}


function solution(arr = [[]], price = 0) {
    const size = arr.length;
    let answer = 0;

    arr.sort((a, b) => a[0] - b[0])

    for (let i = 0; i < size; i++) {
        let cnt = 1;
        let money = price - ((arr[i][0] / 2) + arr[i][1])
        for (let j = 0; j < size; j++) {
            if (i !== j && (arr[j][0] + arr[j][1]) > money) break;
            if (i !== j && (arr[j][0] + arr[j][1]) <= money) {
                money -= arr[j][0] + arr[j][1]
                cnt++;
            }
        }
        answer = Math.max(cnt, answer)
    }
    console.log(answer);
    return 0;
}