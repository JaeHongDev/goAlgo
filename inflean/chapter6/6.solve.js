const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = 8
  const k = 3
  return solution(p, k)
}

function solution(p, k) {
  const queue = new Array(p).fill().map((_, i) => i + 1)
  // shift dequeue
  // push enqueue
  let index = 1

  while (queue.length > 1) {
    const element = queue.shift()
    if (index === k) {
      index = 1
    } else {
      queue.push(element)
      index++
    }
  }
  console.log(queue[0])
  return 0
}
