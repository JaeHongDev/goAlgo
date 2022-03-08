const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputs = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" ").map((arr) => parseInt(arr)));

function solution(a, b, c) {
  const hashTable = new Map();
  const combineKey = (a, b, c) => `${a}=${b}=${c}`;
  const setHashTable = (key, value) => {
    hashTable.set(key, value);
    return value;
  };
  const recursive = (a, b, c) => {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return recursive(20, 20, 20);

    if (hashTable.has(combineKey(a, b, c))) {
      return hashTable.get(combineKey(a, b, c));
    }

    if (a < b && b < c) {
      return setHashTable(
        combineKey(a, b, c),
        recursive(a, b, c - 1) +
          recursive(a, b - 1, c - 1) -
          recursive(a, b - 1, c)
      );
    }
    return setHashTable(combineKey(a, b, c),  recursive(a - 1, b, c) +
    recursive(a - 1, b - 1, c) +
    recursive(a - 1, b, c - 1) -
    recursive(a - 1, b - 1, c - 1));
  };
  console.log(`w(${a}, ${b}, ${c}) = ${recursive(a, b, c)}`);
}
inputs.forEach(([a, b, c]) => {
  if (a === -1 && b === -1 && c === -1) return;
  solution(a, b, c);
});
