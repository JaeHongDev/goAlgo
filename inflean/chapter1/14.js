module.exports = function ([num, strings]) {
    const initalize = {
        size: strings[0].length,
        index: 0
    }
    console.time("a")
    for (let i = 1, j = strings.length; i < j; i++) {
        if (strings[i].length > initalize.size) {
            initalize.size = strings[i].length;
            initalize.index = i
        }
    }
    console.timeEnd("a");

    console.time("b");
    let index = 0;
    let size = strings[0].length
    for (let i = 1, j = strings.length; i < j; i++) {
        if (strings[i].length > size) {
            size = strings[i].length;
            index = i
        }
    }
    console.timeEnd("b")
    return strings[initalize.index];
}