const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input= Number(fs
    .readFileSync(filePath)
    .toString());


/**
 *    *
 *   * *
 *  *   *
 * *******
 */
/**
 *
 * @param {number}input
 */
function solution(input){
    const n = 1 + (input - 1 ) * 2;
    const arr = new Array(input).fill(0).map(_=> new Array(n).fill(" "));
    const star = "*";

    const center = ((n+1) / 2)-1;

    arr[0][center] = star;
    for(let i = 1; i < input-1;i++){
        arr[i][center-i] = star;
        arr[i][center+i] = star;
    }
    arr[input-1].fill(star);

    return arr.map(a => a.join("").trimEnd()).join("\n")

}
console.log(solution(input));


