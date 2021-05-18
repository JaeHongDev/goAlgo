const util = require("./util")
module.exports = function () {

    const size = 7;
    const numbers = util.stringToIntArray("128 460 603 40 521 137 123")

    return solution(size, numbers)
}

function sumNumber(num) {
    let mutNum = num;
    let sum = 0;
    while (mutNum >= 10) {
        sum += mutNum % 10
        mutNum = Math.floor(mutNum / 10)
    }
    sum += mutNum % 10
    return sum;

}
function solution(size, numbers) {
    let maxSum = sumNumber(numbers[0]);
    let maxIndex = 0
    for (let i = 1; i < numbers.length; i++) {
        console.time("s1");
        const sum = sumNumber(numbers[i])
        console.timeEnd("s1");


        console.time ('s2');
        const sum1 = numbers[i].toString().split("").reduce((element,cal)=>element+ Number(cal),0)
        console.timeEnd('s2');
        if (maxSum === sum && numbers[i] > numbers[maxIndex]) {
            maxIndex = i
        }
        if (maxSum < sum) {
            maxSum = sum;
            maxindex = i
        }
    }
    console.log(numbers[maxIndex])

    return 0;
}

/*
   128
    /10 12
        1

*/