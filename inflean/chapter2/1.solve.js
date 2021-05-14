module.exports = function () {
    a = 6, b = [7, 3, 9, 5, 6, 12]
    return solution(a, b)
}


function solution(num, list) {
    const answer = [list[0]]
    for (let i = 1, i_max = num; i < i_max; i++) {
        if (list[i - 1] < list[i]) answer.push(list[i])

    }
    return answer;
}