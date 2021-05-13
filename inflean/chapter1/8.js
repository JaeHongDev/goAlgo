// 일곱 난쟁이
module.exports = function (args) {

    let sum = args.reduce((a, b) => a + b, 0)


    for (let i = 0, i_max = args.length - 1; i < i_max; i++) {
        for (let j = i + 1, j_max = args.length; j < j_max; j++) {
            if ((sum - (args[i] + args[j])) === 100) console.log(i, j)
        }
    }
    return sum;

}
