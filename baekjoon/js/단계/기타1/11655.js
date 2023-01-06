const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const data = fs.readFileSync(filePath)
    .toString().replaceAll("\r\n","");

const calculator = (t, num, min, max) => {
    if (t + num > max) {
        return min + ((t + num) - max -1 )
    }
    return t + num
}


console.log(data.split("")
    .map(num => num === " " || Number.isInteger(Number(num)) ? num
        :  num.charCodeAt(0) <= 90
            ? String.fromCharCode(calculator(num.charCodeAt(0), 13, 65, 90))
            : String.fromCharCode(calculator(num.charCodeAt(0), 13, 97,122))
).join(""));


