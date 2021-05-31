const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const k = 9
  const size = 5
  const p = stringToIntArray('1 2 3 2 6 2 3 5 7,1 2 3 2 6 2 3 5 7,1 2 3 2 6 2 3 5 7,1 2 3 2 6 2 3 5 7,1 2 3 2 6 2 3 5 7,1 2 3 2 6 2 3 5 7,1 2 3 2 6 2 3 5 7,1 2 3 2 6 2 3 5 7,1 2 3 2 6 2 3 5 7')

  return solution(new Array(10000).fill(0).map((_,i)=>i), size)
}

class DramQueue {
  constructor(size) {
    this.memory = new Array(size).fill(0)
  }
  process(processNumbers) {
    processNumbers.forEach((element) => {
      const findIdx = this.memory.findIndex((item) => item === element)
      findIdx === -1 ? this.cacheMiss(element) : this.cacheHit(element,findIdx)
    })
    return this.memory
  }
  cacheMiss(number) {
    if (this.memory.length === 5) this.memory.pop()
    this.memory = [number, ...this.memory]
  }
  cacheHit(number, index) {
    this.memory = [
      this.memory[index],
      ...this.memory.filter((element) => element !== number),
    ]
  }
}

function solution(p, size) {
  console.time('s1')
  const queue = new DramQueue(size)
  queue.process(p)
  console.timeEnd('s1')

  console.time('s2')

  solution1(size, p)
  console.timeEnd('s2')

  //return queue.process
}

function solution1(size, arr) {
  let answer = Array.from({ length: size }, () => 0)
  arr.forEach((x) => {
    let pos = -1
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1]
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1]
      }
    }
    answer[0] = x
  })

  return answer
}
