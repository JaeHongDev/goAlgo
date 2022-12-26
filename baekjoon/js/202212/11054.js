


/**
 * 수열 S가 어떤 수 Sk를 기준으로 S1 < S2 < ... Sk-1 < Sk > Sk+1 > ... SN-1 > SN을 만족한다면, 그 수열을 바이토닉 수열이라고 한다.
 *
 * 예를 들어, {10, 20, 30, 25, 20}과 {10, 20, 30, 40}, {50, 40, 25, 10} 은 바이토닉 수열이지만,  {1, 2, 3, 2, 1, 2, 3, 2, 1}과 {10, 20, 30, 40, 20, 30} 은 바이토닉 수열이 아니다.
 *
 * 수열 A가 주어졌을 때, 그 수열의 부분 수열 중 바이토닉 수열이면서 가장 긴 수열의 길이를 구하는 프로그램을 작성하시오.
 */
function description(){

    /**
     *  10 20 30 25 20
     *
     *  즉 어떤 수를 기준으로 작아지고 커지는 수열
     *
     *  1 5 2 1 4 3 4 5 2 1 라는 수열이 주어질 경우
     *  1 5 2 1 은 바이토닉 수열임
     *  1 2 1 도 바이토닉 수열입니다.
     *
     *  가장 긴 바이토닉 수열을 찾기 위해서는 어떻게 해야할까
     *
     *  1 부터 시작한다고 가정할때
     *  1 5 다음으로 큰 수열이 없기 때문에 가장 작은 숫자를 찾을 때 까지 내려감
     *  1 5 2 1 4는 1보다 크기 때문에 바이토닉한 수열이 될 수 없음
     *
     *  하지만 이건 연속적인 수열에 대한 정보이기 때문에 숫자를 뽑아서 선택하는 경우에는 해당 할 수 없음
     *
     *  특정 숫자를 기준으로 만들어질 수 있는 가장 작은 수열의 갯수를 캐시함
     *
     *  1 -> 0
     *  5 -> [1] 1
     *  2 -> [1] 1
     *  4 -> [1,2] 2
     *  3 -> [1,2] 2
     *  4 -> [1,2,3] 3
     *  5 -> [1,2,3,4] 4
     *  2 -> [1] 1
     *  1 -> 0
     *  이런 형태가 나오게 됩니다.
     *
     *  여기서 특정한 규칙을 도출하기 위해서
     *  3번째 부터 확인을 해보면
     *  4의 경우에는
     *  2,5 중에서 가능한 2라는 숫자가 가지는 가장 작은 숫자를 가지고 올 수 있음
     *  4 -> cache[1] 에 자기 자신을 더한 값임
     *
     *  4번째의 경우 3의 숫자로 볼때
     *  앞에서 올 수 있는 4밑으로 작은 숫자는 2입니다.
     *  3 -> cache[1] 에 자기 자신을 더한 값입니다.
     *
     *  5번째의 경우 4의 숫자로 볼때
     *
     *  3이 자신보다 작은 숫자 입니다.
     *  그렇기에
     *  cache[4] 에 자기 자신을 더한 값이 될 수 있습니다.
     *
     *  하지만 여기서 한 가지 의문점이 들 수 있는데
     *  정말 자신보다 작은 숫자가 그 모든 값을 캐시 한 것보다 가장 많은 숫자를 가지고 있는 바이토닉한 순열이 될 수 있는가?
     *
     *  1 2 3 4 -> 앞에 3개의 숫자가 존재합니다.
     *  1 2 3 1 4 -> 1을 선택하게 된다면 문제가 발생합니다.
     *
     *  그렇다고 해서 숫자 3을 찾는게 가장 좋은 판단이냐?
     *
     *  다시 추가 예를 가지고 비교를하면
     *  1 2 3 2 1 4 5 내 밑에 있는 애들 중에서 가장 큰 녀석을 찾아야 한다.
     *
     *  투 포인터로 해결 할 수 있습니다.
     *
     *  1 2 3  [ 4 <- 포지션에 위치하게 됨]
     *  2 1 4 5 [
     *
     *  다시 정리하면
     *  1 2 3 2 1 4 5 라는 숫자에서 가장 큰 수열을 찾는 다고 가정할 때
     *
     *  1 <- ll, rl이 위치함
     *  2 <- rl이 되면서
     *  2가 올 수 있는 가장 작은 숫자는 1이 됨
     *
     *  3 <- rl이 3에 위치함
     *  3 <- ll이 2에 위치함 rl은 3에 위하게 됨
     *
     *  2 <- 에 위치하게 되면
     *  3
     *
     *  1 2 3 3 3 3 3 3 3 3 3 4
     *  1 2 3 2 2 2 2 2 2 2 2 4
     *
     *  ll,rl =0,1
     *
     *  1 2 3 2
     */
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const data = fs.readFileSync(filePath)
    .toString()
    .trim()
let [inputCase, inputs] = data.split("\n");
inputs = inputs.split(" ").map(Number);

console.log(solution(Number(inputCase), inputs));

/**
 *
 * @param {number} inputCase
 * @param {number[]}inputs
 */
function solution(inputCase, inputs){
    const cache1 = new Array(inputCase).fill(0);
    const cache2 = new Array(inputCase).fill(0);

    for(let i = 0; i < inputCase; i++){
        let increaseCount = 1;
        for(let j = i; j >= 0; j--){
            if(inputs[i] > inputs[j]) {
                increaseCount = Math.max(increaseCount, cache1[j] + 1);
            }
        }
        cache1[i] = increaseCount;
    }

    for(let i = inputCase -1; i >= 0 ; i--){
        let decreaseCount = 1;

        for(let j = i; j < inputCase ; j++){
            if(inputs[i] > inputs[j]){
                decreaseCount = Math.max(decreaseCount, cache2[j] + 1);
            }
        }
        cache2[i] = decreaseCount;

    }

    return Math.max(...new Array(inputCase).fill(0)
        .map((_,index)=> cache1[index] + cache2[index])) -1

}
