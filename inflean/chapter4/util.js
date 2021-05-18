const stringToArray = (string="") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))

module.exports = {
    stringToArray,
    stringToIntArray
}