module.exports = function (str) {
    const str_size = parseInt(str.length)
    let half = 0;
    console.time("t1");
    if (str_size % 2 === 0) {
        half = str_size / 2 - 1
        str[half] + str[half + 1]
    }

    half = (str_size - 1) / 2
    console.timeEnd("t1")

    console.time("t2");
    if (str_size % 2 === 0) {
        half = str_size / 2 - 1
        str.substring(half, 2)
    }

    half = (str_size - 1) / 2
    console.timeEnd("t2")
    return str[half]
}