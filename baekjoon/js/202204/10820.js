const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const inputs = fs.readFileSync(filePath).toString().split("\n");
if (inputs[inputs.length - 1] === "") inputs.pop();

inputs.forEach(str => {
    let lowerCount = 0;
    let upperCount = 0;
    let spaceCount = 0;
    let numCount = 0;
    for (let s of str) {
        if (s <= 'z' && s >= 'a') lowerCount++;
        if (s <= 'Z' && s >= 'A') upperCount++;
        if (s === " ") spaceCount++;
        if (s >= '0' && s <= '9') numCount++;
    }
    console.log(`${lowerCount} ${upperCount} ${numCount} ${spaceCount}`);
})