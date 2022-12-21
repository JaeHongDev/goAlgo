const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input= Number(fs
    .readFileSync(filePath)
    .toString());


/**
 *
 * 2×n 크기의 직사각형을 1×2, 2×1 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.
 *
 * 아래 그림은 2×5 크기의 직사각형을 채운 한 가지 방법의 예이다.
 * @param {number}input
 */
function solution(input){
    let answer = 0;
    const board = new Array(2).fill(0).map(_ => new Array(input).fill(0));

    console.log(input);
    return answer % 10007
}

console.log(solution(input));
