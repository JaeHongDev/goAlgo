const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';

const [min, max] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const eratosthensse = (min, max) => {
    const arr = new Array(1000000 + 1).fill(true).fill(false, 0, 2);
    for (let i = 2; i*i <= max; i++) {
        if (!arr[i]) continue;
        for (let j = i * i; j <= 1000000; j += i) arr[j] = false;
    }
    return arr;
}

const result = eratosthensse(min, max);
const answer = [];
for (let i = min; i <= max; i++) {
    if (result[i]) answer.push(i);
}
console.log(answer.join("\n"));
