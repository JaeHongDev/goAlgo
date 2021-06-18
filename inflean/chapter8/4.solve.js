const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const k = 3
  return solution(k)
}

function solution(k) {
  const p = new Array(k).fill(0)

  const DFS = (L) => {
    // base case
    if (L === k + 1) {
      console.log(p.toString())
      return
    }

    p[L] = 1
    DFS(L + 1)

    p[L] = 0
    DFS(L + 1)
  }

  DFS(1)
  return 0
}

/*
function DFS(L) {
  if (L === n + 1) {
    let tmp = ''
    for (let i = 1; i <= n; i++) {
      if (ch[i] === 1) tmp += i + ' '
    }
    if (tmp.length > 0) answer.push(tmp.trim())
  } else {
    ch[L] = 1
    DFS(L + 1)
    ch[L] = 0
    DFS(L + 1)
  }
}

*/
