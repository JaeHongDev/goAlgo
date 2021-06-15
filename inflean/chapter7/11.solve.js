const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const k = 3
  const p = stringToIntArray('1 2 3 4 5 6 7 8 9')

  return solution(p, k)
}

function solution(p = [], k = 0) {
  let lt = p[0]
  let rt = p.reduce((arr, cal) => arr + cal, 0)

  while (true) {
    let mid = parseInt((lt + rt) / 2)

    let sum = 0
    let cnt = 0

    for (let i = 0; i < p.length; i++) {
      sum += p[i]
      console.log(i,sum)
      if (sum >= mid) {
        cnt++
        sum = 0;
      } 
    }
    console.log(cnt)

    break
  }
  return 0
}
