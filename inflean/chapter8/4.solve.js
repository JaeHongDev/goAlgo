const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {

    const k = 3;
    return solution(k)
}

function solution(k) {
    
    const DFS = (vertax,set = []) =>{
        if(vertax > k) return ;
        console.log(vertax)
        DFS(vertax * 2);
        DFS(vertax * 2+1)
    }
    DFS(1)
    
    return 0;
}





