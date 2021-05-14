module.exports = function ([size, strs]) {
    for (let i = 0, j = size; i < j; i++) {
        let cnt = 0;
        while (cnt !== size) {
            strs[strs.indexOf(strs[i])] = "";
            cnt++
        }
    }
    return strs;
}