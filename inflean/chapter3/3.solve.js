const util = require("./util")
module.exports = function(){
    
    const str = "g0000en2T0s8eSoft"
    return solution(str )
}

function solution(str="") {
    const s= str.replace(/[^0-9]/g,"")
    let answer = 0;
    for(let i = 0; i<str.length; i++){
        if(!isNaN(s[i])) answer = answer * 10 + Number(s[i])
    }
    return answer
}