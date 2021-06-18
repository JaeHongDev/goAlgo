const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = stringToIntArray('1 3 5 6 7 10')
  return solution(p)
}

function solution(p) {
  const p_size = p.length

  const total = p.reduce((arr, cal) => arr + cal, 0)

  let flag = 0
  const DFS = (L, sum) => {
    console.log(L, sum)
    if (flag) return;

    if (L === p_size) {
      if (sum * 2 === total) flag = 1
    } else {
      DFS(L + 1, sum + p[L])
      DFS(L + 1 , sum)
    }
  }
  DFS(0, 0)
  console.log(flag ? 'Yes' : 'NO')
  return 0
}
