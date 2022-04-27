const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");

const [_, ...sequenceStr] = inputs;

const gcd = (p, q) => {
    if (q === 0) return p;
    return gcd(q, p % q);
}
const answer = []
for (let str of sequenceStr) {
    const [p, q] = str.trim().split(" ").map(Number);
    answer.push(p * q / gcd(p, q) )
}

console.log(answer.join("\n"));