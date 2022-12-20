const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input= Number(fs
    .readFileSync(filePath)
    .toString());


/**
 *
 * @description 정수 X에 사용할 수 있는 연산은 다음과 같이 세 가지 이다.
 *
 * X가 3으로 나누어 떨어지면, 3으로 나눈다.
 * X가 2로 나누어 떨어지면, 2로 나눈다.
 * 1을 뺀다.
 * 정수 N이 주어졌을 때, 위와 같은 연산 세 개를 적절히 사용해서 1을 만들려고 한다. 연산을 사용하는 횟수의 최솟값을 출력하시오.
 * @param {number}input
 */
function solution(input){

    let answer = Number.MAX_VALUE;
    let cnt = 0;
    const loop = (num) =>{
        if(cnt >= answer){
            return;
        }
        if(num === 1){
            answer = Math.min(answer, cnt);
            return ;
        }

        if(num %3 === 0){
            cnt += 1;
            loop(num /3);
            cnt -= 1;
        }
        if(num % 2 === 0){
            cnt += 1;
            loop(num /2);
            cnt -= 1;
        }
        cnt +=1;
        loop(num - 1);
        cnt -=1;
    }
    loop(input);
    return answer;
}
console.log(solution(input));
