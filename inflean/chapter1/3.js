
function solution(people) {
    // 사람 수 === 연필 수
    return Math.ceil(people / 12)
}


const answers = [25, 178];
console.log(
    answers.map(answer => solution(answer))
)