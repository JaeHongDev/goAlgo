const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n").map(item=>item.split(" ").map(Number))

const [testCase,...timeTable] = input;
timeTable.sort((a,b)=>{
    if(a[1] === b[1]) return a[0] - b[0]
    return a[1]-b[1]
});
let endTime = timeTable[0][1];
let cnt = 1;
for(let i = 1;i<timeTable.length;i++){
    if(timeTable[i][0] >= endTime) {
        cnt++;
        endTime = timeTable[i][1];
    }
}
console.log(cnt);
// 한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만듦
// 각 회의 I에 대해 시작시간과 끝나는 시간이 주어짐
// 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾는다.
// 화의가 끝나는 동시에 다음 회의가 시작될 수 있다.

// N 회의의 수
// N+1 각 회의의 정보가 주어짐
// 공백을 두고 시작 시간과 끝나는 시간
// 회의를 가장 많이 진행하려면

// x축에 따라 정렬
// y값을 타고 들어감 

// 최대 사용할 수 있는 회의의 최대 개수를 구함.
// 1 ~ 7
// 2 ~ 3 
// 3 ~ 4
// 4 ~ 5
/*

0 6
1 4
3 5
5 7
만약에 
    0 - 6 (1)
    1 - 4 (3)
    3 - 5 (3) 
    5 - 7 (1)
    6 - 10 
    최대값은 3임
    4가지를 건너 뜀 

    0 6 (2)
    1 4 (2)
    2 13 (1) out
    3 5 (2)
    3 8
    5 7  
    5 9
    6 10 (2) 3
    8 11
    8 12
    12 14
0 6 - 6 10 - 12 14
1 4 - 5 7 - 12 14
      5 9 - 12 14
3 5 - 3 8 - 8 11 - 12 14
          - 8 12 - 12 14
5 7
*/  