const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = stringToSplitArray('()(((()())(())()))(())')
  return solution(p)
}

function solution(p) {
  const stack = [] //
  let answer = 0

  for (let i = 0; i < p.length; i++) {
    if (p[i] === '(') stack.push('(')
    //여는 괄호를 만날 때 스택에 집어 넣어준다.

    if (p[i] === ')') {
      stack.pop()
      answer += p[i - 1] === ')' ? 1 : stack.length
    }
  }
  console.log(answer)
  return 0
}

/*
()(((()())(())()))(())
() 1 쌍

( ( ( ()() ) (())  ()) ) (())

( ()() ) (()) 3 2

( ( ()() ) (())  ()) 3 +  2  + 2
( ( ( ()() ) (())  ()) ) 3 + 2 + 2 + 2

(())

*/
