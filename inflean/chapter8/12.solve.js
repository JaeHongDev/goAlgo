const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  return solution(5,3)
}

function solution(n, r) {
  //cache memory
  //let memo = Array(n + 1).fill(Array(n + 1).fill(0));
  let memo = Array.from(Array(n+1), () => Array(n+1).fill(0))

  const DFS = (n, r) => {
    if (memo[n][r] > 0) return memo[n][r]
    if (n === r || r === 0) return 1
    return (memo[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r))
  }
  console.log(memo)
  console.log(DFS(n,r))
  return 0
}

function a() {

  function DFS(n, r) {
    if (dy[n][r] > 0) return dy[n][r]
    if (n === r || r === 0) return 1
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r))
  }
  answer = DFS(n, r)
  return answer
}

/*
5 3
4 2
3 1
2 0
2 1
1 0
1 1
3 2
2 1
2 2
4 3
3 2
3 3
*/

/*
5 3
4 2
3 1
2 0
2 1
1 0
1 1
3 2
2 1
2 2
4 3
3 2
3 3

*/