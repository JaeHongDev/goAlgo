const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../input.txt';
const input = Number(fs.readFileSync(filePath).toString().trim());

const main = (line) => {
    line = Number(line);
    const DP = new Array(line + 1).fill(0);
    DP[1] = 1;
    DP[2] = 2;

    for (let i = 3; i <= line; i++) DP[i] = (DP[i - 1] + DP[i - 2]) % 100007;
    console.log(DP[line]);
}
main(input);

