const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = [
    stringToIntArray('2 7 '),
    stringToIntArray('1 3'),
    stringToIntArray('1 2 '),
    stringToIntArray('2 5 '),
    stringToIntArray('3 6'),
  ]
  return solution(p)
}

function solution(p) {
  p.sort((a,b)=> {
      if(a[0] === b[0]){
          return a[1] -b[1]
      }
      return a[0] - b[0]
  })
  console.log(p)
  return 0
}
