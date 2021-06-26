const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = [
    stringToIntArray('1 2 '),
    stringToIntArray('1 3 '),
    stringToIntArray('1 4 '),
    stringToIntArray('2 1 '),
    stringToIntArray('2 3 '),
    stringToIntArray('2 5 '),
    stringToIntArray('3 4 '),
    stringToIntArray('4 2 '),
    stringToIntArray('4 5'),
  ]
  const N = 5
  return solution(N, p)
}

function solution(N, p = []) {
  const graph = new Array(N + 1).fill(0).map(() => new Array(N + 1).fill(0))
  const ch = new Array(N + 1).fill(0)
  const path = []
  p.forEach(([a, b]) => (graph[a][b] = 1))

  const DFS = (V) => {
    // base case
    if (V === N) {
      console.log(path )
      return
    }
    for (let i = 1; i <= N; i++) {
      if (graph[V][i] === 1 && ch[i] === 0) {
        ch[i] = 1
        path.push(i)
        DFS(i)
        ch[i] = 0
        path.pop(i)
      }
    }
  }
  path.push(1)
  ch[1] = 1
  DFS(1)
  console.log(graph)
  return 0
}
