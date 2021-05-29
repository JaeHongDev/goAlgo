const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const t = stringToSplitArray('ABCDEFG')
  const p = stringToSplitArray('CBA')
  const k = stringToSplitArray('CBDAGE')
  return solution(t, p, k)
}

function solution(t, p = [], k = []) {
  for (let i = 0; i < k.length; i++) {
    if (p.length === 0) return 'YES'
    if (p.indexOf(k[i]) !== -1) {
      if (p.shift() !== k[i]) return 'NO'
    }
  }
  if (p.length !== 0) return 'NO'
  return 'YES'
}
