const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = 11
  return solution(p)
}

function solution(p) {
  const DFS = (L) => {
    // base case
    if (L <= 1) return `${L}`
    const quotient = L % 2
    return DFS((L - quotient) /2) +`${quotient}`
  }
  return DFS(p)
}
