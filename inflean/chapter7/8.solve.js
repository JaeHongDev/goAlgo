const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  //const p = [[1, 4], [2, 3], [3, 5], [4, 6], [5,7]]
  const p = [
    [3, 3],
    [1, 3],
    [2, 3],
  ]
  return solution(p)
}

function solution(p) {
  p.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    } else {
      return a[1] - b[1]
    }
  })
  let endTime = 0,
    answer = 0
  p.forEach(([st, ft]) => {
    if (st >= endTime) {
      console.log([st, ft])
      endTime = ft
      answer++
    }
  })
  return answer
}
