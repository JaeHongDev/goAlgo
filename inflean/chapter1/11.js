module.exports = function (string) {

    let cnt = 0; 
    for(let i = 0, i_max=string.length;i<i_max;i++){
        string[i] === string[i].toUpperCase() ? cnt++:"" 
    }
    return cnt
}