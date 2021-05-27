const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {
    const p = stringToSplitArray("(A(BC)D)EF(G(H)(IJ)K)LM(N)")
    return solution(p)
}

function solution(p) {
    const answer = [];
    const size = p.length;
    for (let i = 0; i < size; i++) {
        answer.push(p[i]);
        if (p[i] === ")") {
            while (true) {
                const c = answer.pop(p[i]);
                if (c === "(") {
                    break;
                }
            }

        }
    }
    console.log(answer.join(""))
    console.log(1)
    return 0;
}





