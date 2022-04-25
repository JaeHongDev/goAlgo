const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const inputs = fs.readFileSync(filePath).toString().split("\n");

const [cases, ...commands] = inputs;

const store = [];
const answer = []; 
commands.forEach(commandstr => {
    const [command, str] = commandstr.trim().split(" ");
    switch (command) {
        case "push_front":
            store.unshift(str);
            break;
        case "push_back":
            store.push(str);
            break;
        case "pop_front":
            answer.push(store.length === 0 ? -1 : store.shift());
            break;
        case "pop_back":
            answer.push(store.length === 0 ? -1 : store.pop());
            break;
        case "size":
            answer.push(store.length);
            break;
        case "empty":
            answer.push(store.length === 0 ? 1 : 0);
            break;
        case "front":
            answer.push(store.length === 0 ? -1 : store[0]);
            break;
        case "back":
            answer.push(store.length === 0 ? -1 : store[store.length - 1]);
            break;
    }
});
console.log(answer.join("\n"));