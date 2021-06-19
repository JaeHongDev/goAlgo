const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = stringToIntArray('1 2 5')
  const k = 15
  return solution(p, k)
}

function solution(p, k) {
  const p_size = p.length
  let flag = 0
  let answer = Math.pow(p_size, p_size)
  const DFS = (L, sum, remainingCoins, set) => {
    // case: over the money
    // case: over the remaining coin
    if (sum > k || L === p_size || answer < remainingCoins) return

    // base case
    if (sum === k) {
      answer = Math.min(answer, remainingCoins)
      console.log(set)
      return
    }

    // case select my and next data
    DFS(L + 1, sum + p[L], remainingCoins + 1, [...set, p[L]])

    // not selected data and next data
    DFS(L + 1, sum, remainingCoins, [...set])

    // case select my
    DFS(L, sum + p[L], remainingCoins + 1, [...set, p[L]])
  }
  DFS(0, 0, 0, [])
  return answer
}
