const util = require("./util")
module.exports = function () {
    const p1 = util.stringToSplitArray("AbaAeCe")
    const p2 = util.stringToSplitArray("baeeACA")
    return solution(p1, p2)
}

function solution(p1, p2) {

    const createHash = (arr) => {
        const emptyHash = new Map();
        const size = arr.length;
        for (let i = 0; i < size; i++) {
            if (emptyHash.has(arr[i])) {
                emptyHash.set(arr[i], emptyHash.get(arr[i]) + 1)
            } else {
                emptyHash.set(arr[i], 1)
            }
        }
        return emptyHash
    }

    for (x of createHash(p1)){
        console.log(x )
    }

        return 0;

}