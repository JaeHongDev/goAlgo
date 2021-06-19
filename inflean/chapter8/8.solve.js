const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = [
    stringToIntArray('1 1'),
    stringToIntArray('1 2'),
    stringToIntArray('1 3'),
    stringToIntArray('2 1'),
    stringToIntArray('2 2'),
    stringToIntArray('2 3'),
    stringToIntArray('3 1'),
    stringToIntArray('3 2'),
    stringToIntArray('3 3'),
  ]
  return solution(3, 2)
}

function solution(n, m) {
  const DFS = (L, set) => {
    // base case
    if (L === m) {
      console.log(set)
      return
    }

    for(let i = 1; i<= n;i++) {
        DFS(L+1,[...set,i])
    }
  }
  DFS(0, [])
  return 0
}
