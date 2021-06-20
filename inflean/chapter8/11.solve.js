const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  return solution(5)
}

function solution(p) {
  const DFS = (v) => {
    if (v === 1) return 1
    return v * DFS(v - 1)
  }
  console.log(DFS(5))
  return 0
}
