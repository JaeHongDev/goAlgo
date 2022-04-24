const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let inputs = fs
    .readFileSync(filePath)
    .toString()
    .trim()
    .split("\n")
    .map(item=>item.split(" ").map(item=>item.trim()));

const [size,...commands] = inputs;

class Stack {
    constructor() {
        this.store = [];
        this.commandResult = "";
    }
    push(x) {
        this.store.push(x);
    }
    pop(){
        if(this.isEmpty()) return -1;
        return this.store.pop();
    }
    top(){
        if(this.isEmpty()) return -1;
        return this.store[this.size() -1 ];
    }
    empty() {
        return this.isEmpty() ? 1 : 0;
    }
    isEmpty() {
        return this.size() === 0;
    }
    size(){
        return this.store.length;
    }
    insertCommandResult(result){
        this.commandResult += `${result}\n`;
    }
    run(command){
        switch(command[0]) {
            case 'push': 
                this.push(command[1]);
                break;
            case 'pop':
                this.insertCommandResult(this.pop());
                break; 
            case 'empty':
                this.insertCommandResult(this.empty());
                break;
            case 'size':
                this.insertCommandResult(this.size());
                break;
            case 'top':
                this.insertCommandResult(this.top());
                break;
        }
    }
}

function solution(commands =[]){
    const stack = new Stack();
    commands.forEach(command=>{
        stack.run(command);
    })
    console.log(stack.commandResult);
}
solution(commands);
