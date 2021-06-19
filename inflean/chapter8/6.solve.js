const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const c = 259
  const p = stringToIntArray('81 58 42 33 61')
  return solution(c, p)
}

function solution(c, p) {
  const p_size = p.length
  let answer = 0
  const DFS = (L, sum) => {
    // case: destination value bigger than sum
    if (sum >= c) return

    // base case
    if (L === p_size) {
      answer = Math.max(answer, sum)
      return
    }

    DFS(L + 1, sum + p[L])
    DFS(L + 1, sum)
  }
  DFS(0, 0)
  return answer
}
