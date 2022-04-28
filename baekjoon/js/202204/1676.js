const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const fac = (n) => {
    if (n <= 1) return 1n;
    return fac(n-1) * BigInt(n)
}

const str = fac(Number(input)).toString();
let cnt = 0;
for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "0") {
        cnt++;
        continue;
    }
    console.log(cnt);
    return;
}
