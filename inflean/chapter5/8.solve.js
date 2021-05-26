const util = require("./util")
module.exports = function () {
    const p = "bacaAacba"
    const findString = "abc"
    return solution(p, findString)
}

Map.prototype.insert = function (findKey) {
    if (this.has(findKey)) this.set(findKey, this.get(findKey) + 1)
    else this.set(findKey, 1)
}
Map.prototype.compareOtherHash = function (otherHash = new Set()) {
    if (this.size !== otherHash.size) return false
    for (let [key, value] of this) {
        if (!otherHash.has(key) || otherHash.get(key) !== value) return false
    }
    return true;
}
function solution(p, k) {
    const k_size = k.length;

    const createHash = (arr, size) => {
        const returnHash = new Map();
        for (let i = 0; i < size; i++) returnHash.insert(arr[i])
        return returnHash
    }
    const k_hash = createHash(k, k_size);
    let p_hash = createHash(p, k_size - 1)
    let lt = 0, answer = 0;
    for (let rt = k_size - 1; rt < p.length; rt++) {
        p_hash.insert(p[rt])
        if (p_hash.compareOtherHash(k_hash)) answer++;
        if (p_hash.get(p[lt]) === 1) p_hash.delete(p[lt])
        else p_hash.set(p[lt],p_hash.get(p[lt])-1)
        lt++
    }
    console.log(answer)
    return 0;
}