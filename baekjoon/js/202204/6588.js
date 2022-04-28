const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : "../input.txt";
const inputs = fs.readFileSync(filePath).toString().trim().split("\n");
if (inputs[inputs.length - 1] === "0") inputs.pop();

const eratosthensse = () => {
    const n = 1000000; 
    const arr = new Array(n+ 1).fill(true).fill(false, 0, 2);
    for (let i = 2; i * i <= n; i++) {
        if (!arr[i]) continue;
        for (let j = i * i; j <= n; j += i) arr[j] = false;
    }
    return arr;
}

const arr = eratosthensse();

const answer = [];
for (let i = 0; i < inputs.length; i++) {
    const num = inputs[i];
    let temp = "";
    for (let i = 3; i <= num-3; i++) {
        if (!arr[i]) continue;
        if (!arr[num - i]) continue;
        if (arr[i] % 2 === 0) continue;
        if (arr[num - i] % 2 === 0) continue;
        if (temp !== "") break;
        temp = `${num-i+i} = ${i} + ${num-i}`;
    }
    if (temp === "") temp = "Goldbach's conjecture is wrong";
    answer.push(temp);
}
console.log(answer.join("\n"));