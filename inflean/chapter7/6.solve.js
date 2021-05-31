const stringToArray = (string = '') => string.trimEnd().split(' ')
const stringToIntArray = (string) =>
  stringToArray(string).map((item) => parseInt(item))
const stringToSplitArray = (string = '') => string.trimEnd().split('')

module.exports = function () {
  const p = stringToIntArray('120 125 130 135 135 143 160 180 190 200 205 208').concat(new Array(100000).fill(0).map((_,i)=>i+210))
  console.time ('s1');
  solution(p)
  console.timeEnd('s1');
  console.time ('s2');
  solution1(p)
  console.timeEnd('s2');
    return 0;
}

function solution(p) {
  let sum = 0
  let check = 0
  const answer = []
  for (let i = 0; i < 3; i++) sum += p[i]

  for (let i = 3; i < p.length; i++) {
    let temp = sum + p[i] - p[i - 3]
    if (sum > temp) {
      if (check === 0) {
        answer.push(i - 3 + 1)
        check = 1
      } else {
        answer.push(i + 1)
        break;
      }
    }

    sum = temp
  }
  console.log(answer)
  return 0
}




function solution1(arr){
    let answer=[];
    let sortArr=arr.slice();
    sortArr.sort((a, b)=>a-b);
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==sortArr[i]) answer.push(i+1);
    }
    return answer;
}