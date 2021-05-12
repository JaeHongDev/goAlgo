//홀수

function solution(numbers) {
    const odd = {
        sum: 0,
        count: 0,
        avg: 0
    }
    const even = {
        sum: 0,
        count: 0,
        avg: 0
    }
    for (let i = 0, j = numbers.length; i < j; i++) {
        if (numbers[i] % 2 === 0) {
            odd.sum += numbers[i];
            odd.count += 1;
        }
        else {
            even.sum += numbers[i];
            even.count += 1;
        }
    }
    console.log(odd,even)
    return {
        odd: even.sum / even.count
    }
}

const ex = "12 77 38 41 53 92 85";
const answer = ex.split(" ").map(i => parseInt(i))

console.log(
    solution(answer)
)