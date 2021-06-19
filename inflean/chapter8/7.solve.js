const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  //5
  const k = 20
  const p = [
    stringToIntArray('10 5 '),
    stringToIntArray('25 12 '),
    stringToIntArray('15 8 '),
    stringToIntArray('6 3 '),
    stringToIntArray('7 4'),
  ]
  return solution(p, k)
}

function solution(p, k) {
  const p_size = p.length
  let answer = 0;
  const DFS = (L, maxTime, sumScroe) => {
    // case: time is under the zero value
    if (maxTime < 0) return
    // base case
    if (L === p_size) {
        answer =Math.max(sumScroe,answer)
      return
    }

    DFS(L + 1, maxTime - p[L][1], sumScroe + p[L][0])
    DFS(L + 1, maxTime, sumScroe)
  }
  DFS(0, k, 0)
  return answer
}
