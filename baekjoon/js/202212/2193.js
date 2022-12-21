const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
    .readFileSync(filePath)
    .toString()
input = Number(input);


/**
 * 이친수는 0으로 시작하지 않는다.
 * 이친수에서는 1이 두 번 연속으로 나타나지 않는다.
 * 즉, 11을 부분 문자열로 갖지 않는다.
 * @param {number} input
 */
function solution(input){
    const matchAbleCache = new Array(input+1).fill(0);

    matchAbleCache[1] = 1;
    matchAbleCache[2] = 1;
    for(let i = 3; i <=input;i++){
        matchAbleCache[i] = BigInt(matchAbleCache[i-1]) + BigInt(matchAbleCache[i-2]);
    }
    return matchAbleCache[input];
}

console.log(String(solution(input)));


/**
 * 1
 * 0 1 -> 1
 *
 * 2
 * 0 0
 * 0 1
 * 1 0
 * 1 1
 * -> 2
 *
 * 3
 * 0 0 0
 * 0 0 1
 * 0 1 0
 * 0 1 1
 *
 * 1 0 0
 * 1 1 0
 * 1 0 1
 * 1 1 1
 *
 * 1 4
 *
 * 1
 * 1 -> [0] -> [2] ->
 *
 * 처음 오는 숫자는 1이 고정임
 * 두번째 오는 숫자는 0이 고정임
 *
 * 세번째 오는 숫자는 0혹은 1이다.
 * 네번째 오는 숫자는 세번째가 0이면 [0,1] 모두 가능하다
 * 하지만 1인 경우 0만 가능하다.
 *
 * 1 x 1 x 2 x 2
 *
 *
 * 2
 * -- 불가능
 * 0 0
 * 0 1
 * 1 1
 * -- 가능
 * 1 0
 *
 * 3
 * 1 [0 0] [0 1]
 * 6 - 2
 * 000, 001, 010, 011
 * 100, 101, 110, 111
 *
 * -- 가능
 * 100
 * 101
 *
 * -- 불가능
 * 000, 001, 010, 011, 110, 111
 *
 * 4
 * 0000, 0001, 0010, 0100, 1000
 * 0011, 0101, 0110, 1100, 1001, 1010,
 * 0111, 1110, 1011, 1101
 * 1111
 *
 * --가능
 * 1000, 1001, 1010
 *
 *
 * 1: 0
 * 2: 01, 00
 * 3: 000,001,010
 * 4: 0000,0001, 0010, 0101, 0100, 0010
 * 5: 0[4,0], 0[4,1], 0[4,2], 0[4,3], 0[4,4]
 *    01[3,0],01[3,1],01[3,2]
 *    010[2,0],010[2,1]
 *    0101[1,0]
 *
 * 1: 0
 * 20: 1 [0,0] [0,1]
 * 3: 100 101 [000, 001,010]
 * 4: 1000,1001,1010 [
 * [3,0]0 [3,1]0, [3,2]0,
 * [3,0]1 [3,2]1
 * ]
 * 0000,0010,0100,0001,0101
 *
 * 5 : 10000,10001,
 * 00000
 * 00001 00010 00100 01000
 * 00101 01010
 *
 *
 */
