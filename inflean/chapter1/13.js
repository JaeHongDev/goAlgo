module.exports = function (args) {
    let lang = ""
    for (let i = 0, i_max = args.length; i < i_max; i++) {
        if (args[i] === args[i].toUpperCase()) lang += args[i].toLowerCase()
        else {
            lang += args[i].toUpperCase()
        }
    }
    return lang;
}