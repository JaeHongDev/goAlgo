const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "../input.txt";
const [n, m] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);


function getPowerN(n, p) {
    let count = 0;
    while (n >= p) {
        count += parseInt(n / p);
        n /= p;
    }
    return count;
}

const two = getPowerN(n, 2) - getPowerN(n - m, 2) - getPowerN(m, 2)
const five = getPowerN(n, 5) - getPowerN(n - m, 5) - getPowerN(m,5)
console.log(Math.min(two,five))