const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {
    const p = stringToIntArray("13 5 11 7 23 15    ")
    return solution(p )
}

function solution(p) {
    for(let i = 0; i<p.length-1;i++){
        for(let j = i; j <p.length;j++){
            if(p[i] >p[j]){
                [p[i],p[j]] = [p[j],p[i]]             
            }
        }
    }
    console.log(p)
    return ;
}





