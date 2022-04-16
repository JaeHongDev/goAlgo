// 인하은행에는 ATM이 1대밖에 없다. 지금 이 ATM앞에 N명의 사람이 줄을 서있다. 사람은 1번부터 N번까지 번호가 매겨져 있으며
/*
    i번부터 사람이 돈을 인출하는데 걸리는 시간은 pi분이다.
    사람들이 줄을 서는 순서에 따라서, 돈을 인출하는데 필요한 시간의 합이 달라지게 된다.
    예를 드어, 총 5명이 있고, P1 = 3, P2 = 1, P3 = 4, P4 = 3, P5 =2 인 경ㅇ를 생각해보자. 
    1 2 3 4 5 순서로 줄을 선다면, 1번 사람은 3분만에 돈을 뽑을 수 있다. 2번 사람은 1번 사람이 돈을 뽑을 때까지 기다려야 
    하므로 3+1 4분이 걸리게된다. 3번사람은 1번 2번 사람이 돈을 뽑을 때까지 기다려야 하기 때문에, 총 3+1+4=8분이 필요하게 된다.
    4번 사람은 3+1+4+3 =11분, 5번 사람은 3+1+4+3+2 = 13분이 걸리게 된다. 이 경우게 각 사람이 돈을 인출하는데 필요한 
    시간의 합은 3+4+8+11+13 = 39분이다. 

    줄을 2 4 1 4 3 순서로 줄을 서면, 2번 사람은 1분만에 5번 사람은 1+2 = 3 분, 1번 사람은 1+2+3 = 6분,
    4번 사람은 1+2+3+3 = 9분, 3번사람은 1+2+3+3+4 = 13분이 걸리게 된다. 각 사삼이 돈을 인출하는데 필요한 시간의 합은 1+3+6+9+13 = 32분인다. 
    이 방법보다 더 필요한 시간의 합을 최소로 만들 수는 없다.
*/

/*
    i부터 돈을 인출하는데 pi만큼 걸림
    순서에따라 시간이 바뀜
    시간이 빠른 순서대로 정렬해서 차례대로 더함
*/

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const [testCase, waitingTimes] = [Number(input[0]),input[1].split(" ").map(Number)];
const solution = (waitingTimes = []) =>
  waitingTimes
    .map((item, index) => [item, index])
    .sort((a, b) => a[0] - b[0])
    .reduce((pre, cal) => [(pre[0] += cal[0]), pre[1] + pre[0]], [0, 0])[1];
console.log(solution(waitingTimes));
