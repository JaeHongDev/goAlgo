const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [text, cases, ...commands] = input;

class CommandStack {
    constructor(text = "") {
        this.textStack = text.trim().split("");
        this.rStack = [];
        this.cursor = this.textStack.length;
    }
    commandByP(str)
    {
        this.textStack.push(str);
    }
    commandByL()
    {
        if (this.textStack.length === 0) return;
        this.rStack.push(this.textStack.pop());
    }
    commandByD()
    {
        if (this.rStack.length === 0) return;
        this.textStack.push(this.rStack.pop());
    }
    commandByB()
    {
        if (this.textStack.length === 0) return;
        this.textStack.pop();
    }
    runCommand(commands)
    {
        commands.forEach(item => {
            const [command, str] = item.trim().split(" ");
            switch (command) {
                case "P":
                    this.commandByP(str);
                    break;
                case "L":
                    this.commandByL();
                    break;
                case "B":
                    this.commandByB();
                    break;
                case "D":
                    this.commandByD();
                    break;
            }
        });
        return this.textStack.join("").concat(this.rStack.reverse().join(""));
    }
    
}

const commandStack = new CommandStack(text);
console.log(commandStack.runCommand(commands));