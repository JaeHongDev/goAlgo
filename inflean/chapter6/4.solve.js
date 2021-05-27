const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {

    const p = stringToSplitArray("352+*9-")
    return solution(p)
}

function solution(p) {
    const stack = []
    let result = 0;
    for (let i = 0; i < p.length; i++) {
        console.log(p[i])
        switch (p[i]) {
            case "+":
                stack.push(Number(stack.pop()) + Number(stack.pop()))
                break;
            case "-":
                stack.push(-Number(stack.pop()) + Number(stack.pop()))
                break;
            case "*":
                stack.push(Number(stack.pop()) * Number(stack.pop()))
                break;
            case "/":
                stack.push(1 / Number(stack.pop()) * Number(stack.pop()))
                break;
            default:
                stack.push(p[i])
                break;
        }

    }
    console.log(stack)
    return stack;
}





