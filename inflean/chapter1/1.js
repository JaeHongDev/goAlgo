
// 세 수 중 가자 작은 수
function solution(a, b, c) {

    const minNumber = (...args) => {
        let number = args[1]
        args.forEach((item) => item < number ? number = item : "")
        return number;
    }
    return minNumber(a, b, c)
}

const check = solution(6, 5, 11);
console.log(check)