const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = 3
  return solution(p)
}


function solution(p) {
    const DFS = (num) => {
        if(num === 0) {
            return;
        }
        console.log(num);
        DFS(num-1)
    }
    DFS(3)
}
