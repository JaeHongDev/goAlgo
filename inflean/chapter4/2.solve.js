const util = require("./util")
module.exports = function () {
    const size = 9
    const array = util.stringToIntArray("32 55 62 20 250 370 200 30 100");
    return solution(size, array)
}

function checkDecimal(number) {
    let cnt = 0;
    if (number === 1) return false
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) cnt++
        if (cnt > 2) {
            return false
        }
    }
    return number
}

function solution(size = 0, array = []) {
    console.time('s1');
    const items = array.map(item => {
        const number = Number(item
            .toString()
            .split("")
            .reverse()
            .join(""))
        return checkDecimal(number)
    }).filter(item => item)
    console.timeEnd('s1');


    console.log(items)
}

return 0;
