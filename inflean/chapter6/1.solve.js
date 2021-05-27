const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {
    const p = stringToSplitArray("(()(()))(()");
    return solution(p)
}

function solution(p) {
    const size = p.length;
    const stack = [];

    for (let i = 0; i < size; i++) {
        if (p[i] === "(") stack.push(p[i])
        else {
            if (stack.length !== 0) return "NO";
            stack.pop()
        }
    }
    console.log(stack)
    return "YES"

    return 0;
}





