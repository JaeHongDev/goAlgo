module.exports = function (args) {
    console.time("t1")
    const lang = args.replace(/A/g, '#')
    console.timeEnd("t1")

    console.time("t2");
    let lang1 = ""
    for (let i = 0, j = args.length; i < j; i++) {
        if (args[i] === "A") lang1 += "#"
        else {
            lang1 += args[i]
        }
    }
    console.timeEnd("t2")
    //return lang
}