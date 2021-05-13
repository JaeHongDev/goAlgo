
// N까지의 합 구하기
function solution(N) {
    let sum = 0;
    for(let i = 1; i<=N;i++) sum+=i;
    return sum;
    // console.time("calculatingTime")
    // new Array(N)
    //     .fill(0)
    //     .map((_, i) => i + 1)
    //     .reduce((acc, cur) => acc + cur)
    // console.timeEnd('calculatingTime');
    
    return sum;

}


const answers = [210000000]
console.log(
    answers.map(answer => solution(answer))
)