
module.exports = function ([string,char]){

    let cnt = 0;
    for(let i = 0 , i_max = string.length; i<i_max;i++){
        if(char === string[i]) cnt++
    }

    cnt = string.split(char).length-1
    
    return cnt
}