
function solution(numbers) {
    console.time("practice1")
    const MinNumber = (a, b) => a < b ? a : b;
    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length - 1; i++) minNumber = MinNumber(minNumber, numbers[i])
    console.timeEnd("practice1")
    console.time("practice2");
    Math.min(...numbers)
    console.timeEnd("practice2")
}

solution(new Array(99999).fill(Math.ceil(Math.random() * 10000000)))
console.log(Math.ceil(Math.random() * 1000000))
const ex = "5 3 7 11 2 15 17 0 0 0 0 2 0 1 123456 123123123 1231 23 1123 123 123 123 1 15123 0 0 0 1 1 1 2 2 3 4 4 6 9 89 89 89 89 09 180198 09 8102983109238 0192 19238019283 0912830 98123 09812  102938102983 01283 0981230 9812309 8123098 123098 120398 ";
const answer = ex.split(" ").map(i => parseInt(i))

// console.log(
//     solution(answer)
// )
