const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  return solution(5, 14)
}

function solution(p, k) {
  const queue = [p]

  const steps = [-1, 1, 5]

  const ch = new Array(k + 1).fill(0)

  ch[p] = 1

  while (queue.length) {
    const v = queue.shift()
    if(v === k ) {
        console.log(1)
        break;
    }
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i]
      const nextStep = v + step
      if (!ch[nextStep]) {
        queue.push(nextStep)
      }
    }
  }
  return 0
}
