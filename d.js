Map.prototype.insert = function (findKey) {
    if (this.has(findKey)) this.set(findKey, this.get(findKey) + 1)
    else this.set(findKey, 1)
}

Map.prototype.compareOtherHash = function (otherHash = new Set()) {
    if (this.size !== otherHash.size) return false
    for (let [key, value] of this) {
        if(!otherHash.has(key) || otherHash.get(key) !== value) return false
    }
    return true;
}
const a = new Map();

a.set(1, 1)
a.insert(1)
console.log(a)