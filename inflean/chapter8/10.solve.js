const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const M = 2
  const p = stringToIntArray('3 6 9')

  return solution(M, p)
}

function solution(M, p) {
  const p_size = p.length

  const DFS = (N, set) => {
    //base case
    if (N === p_size-1) {
      console.log(set)
      return
    }

    for (let i = 0; i < p_size; i++) {
      DFS(N + 1, [...set, p[i]])
    }
  }
  DFS(0,[])
  return 0
}
