const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim();


function main(size){
    const DP = new Array(size+1).fill(0);
    DP[0] = 1;
    DP[1] = 1;

    for(let i = 2;  i< size+1;i++){
        DP[i] =(DP[i-1] + DP[i-2]*2 ) % 10007
    }

    console.log(DP[size])
}

main(Number(input))