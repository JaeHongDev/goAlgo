const fs = require('fs');
const filePath = process.platform === 'linux' ? "/dev/stdin" : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const store = [];
const answer = [];
const [cases, ...commands] = input;
commands.forEach(commands => {
    const [command, str] = commands.trim().split(" ");
    switch (command) {
        case 'push':
            store.push(str);
            break;
        case 'pop':
            answer.push(store.length === 0 ? -1 : store.shift());
            break;
        case 'size':
            answer.push(store.length);
            break;
        case 'empty':
            answer.push(store.length === 0 ? 1 : 0);
            break;
        case 'front':
            answer.push(store.length === 0 ? -1 : store[0]);
            break;
        case 'back':
            answer.push(store.length === 0 ? -1 : store[store.length - 1]);
            break;
    }
})
console.log(answer.join("\n"));


