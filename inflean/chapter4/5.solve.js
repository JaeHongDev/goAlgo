const util = require("./util")
module.exports = function () {

    const arr = util.stringToIntArray("13 15 34 23 45 65 33 11 26 42")

    return solution(arr, arr.length, 3)
}

function solution(arr, size, k) {
    let answer = [];
    let temp = new Set();
    for (let i = 0; i < size; i++) {
        for (let j = i+1; j < size; j++) {
            for (let k = j+1; k < size; k++) {
                temp.add(arr[i] + arr[j] + arr[k])
            }
        }
    }
    return Array.from(temp).sort((a, b) => b-a )[k-1]
}