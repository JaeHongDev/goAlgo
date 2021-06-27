const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = [
    stringToIntArray('0 0 0 0 0 0 0 '),
    stringToIntArray('0 1 1 1 1 1 0 '),
    stringToIntArray('0 0 0 1 0 0 0 '),
    stringToIntArray('1 1 0 1 0 1 1 '),
    stringToIntArray('1 1 0 0 0 0 1 '),
    stringToIntArray('1 1 0 1 1 0 0 '),
    stringToIntArray('1 0 0 0 0 0 0'),
  ]
  return solution(p)
}

function solution(p = []) {
  const n = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ]
  const DFS = (dx, dy) => {
    console.log(dx,dy)
    if (dx === 6 && dy === 6) {
      console.log(1)
      return
    }

    for (let i = 0; i < n.length; i++) {
      let nx = dx + n[i][0]
      let ny = dx + n[i][1]
      if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && p[nx][ny] === 0) {
        p[nx][ny] = 1
        DFS(nx, ny)
        p[nx][ny] = 0
      }
    }
  }
  p[0][0] = 1
  DFS(0, 0)
  console.table(p)

  return 0
}
