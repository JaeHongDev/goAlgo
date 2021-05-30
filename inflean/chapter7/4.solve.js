const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = stringToIntArray('11 7 5 6 10 9')
  return solution(p)
}

function solution(p) {
  for (let i = 1; i < p.length; i++) {
    let idx = p[i]
    for (let j = i; j > 0; j--) {
        if(idx < p[j]){
        
        }else{
            break;
        }
    }
  }
  return 0
}
