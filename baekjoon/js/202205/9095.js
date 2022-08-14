const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [cases, ...sequence] = input;

sequence.forEach((num) => {
  const cache = new Array(num + 1).fill(0);

  cache[1] = 1; 
  cache[2] = 2; 
  cache[3] = 4;
  for (let i = 4; i <= num; i++) {
        cache[i] = cache[i-2] + cache[i-1] + cache[i-3];
    }
    console.log(cache[num]);
});
