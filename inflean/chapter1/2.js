// 삼각형 판별하기


function solution(...args) {
    args.sort((a, b) => b - a);
    if (args[1] + args[2] < args[0]) return "NO"
    return "YES"
}

const check = solution(13, 33, 17);
console.log(check)