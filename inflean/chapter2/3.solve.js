const util = require("./util")
module.exports = function () {

    const playGame = 5;
    const useCountA = util.stringToIntArray("2 3 3 1 3");
    const useCountB = util.stringToIntArray("1 1 2 2 3")
    return solution(playGame, [useCountA, useCountB]);
}

function ruleWin(case1, case2) {
    console.log(case1,case2)
   
    if (case1 === case2) return "D";
    if (case1 === 1) {
        if (case2 === 2) return "A"
        if (case2 === 3) return "B"
    }
    if (case1 === 2) {
        if (case2 === 1) return "B"
        if (case2 === 3) return "A"
    }
    if (case1 === 3) {
        if (case2 === 1) return "A"
        if (case2 === 2) return "B"
    }
}

function solution(playGame, [useCountA, useCountB]) {
    console.log(playGame);
    console.log(useCountA);
    console.log(useCountB)
    let answers = [];
    for (let i = 0, i_max = playGame; i < i_max; i++)  answers = [...answers, ruleWin(useCountA[i], useCountB[i])]
    return answers;
}