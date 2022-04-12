const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")

const [inputNumber, ...coins] = input;

let sum = Number(inputNumber.split(" ")[1]);
let cnt = 0;
for (let i = coins.length - 1; i >= 0; i--) {
  if (sum >= coins[i]) {
    cnt += Math.floor(sum / coins[i]);
    sum %= coins[i];
  }
}

console.log(cnt);
