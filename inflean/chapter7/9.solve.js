const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const number = [
    stringToIntArray('14 18 '),
    stringToIntArray('12 15 '),
    stringToIntArray('15 20 '),
    stringToIntArray('20 30 '),
    stringToIntArray('5 14'),
  ]
  return solution(number)
}

function solution(p) {
  p.sort((a, b) => {
    return a[0] - b[0]
  })

  let cnt = 1
  let answer = 0
  let lastTime = 0
  p.forEach((element) => {
    console.log(element)
    if (lastTime >= element[0]) {
        cnt++;
    }
    if (lastTime < element[0]) {
      lastTime = element[1]
      answer = Math.max(cnt,answer)
      cnt = 0;
    }
  })
  return answer
}
