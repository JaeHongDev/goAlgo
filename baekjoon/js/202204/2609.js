const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "../input.txt";
const [a, b] = fs.readFileSync(filePath).toString().trim().split(" ");
const [num1, num2] = [Math.max(a, b), Math.min(a, b)];

const gcd = (p, q) => {
    if (q === 0) return p;
    return gcd(q , p %q); 
}
const result = gcd(num1, num2);
console.log(result);
console.log(num1 * num2 / result); 
