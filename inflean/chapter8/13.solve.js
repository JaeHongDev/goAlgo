const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {

    const N = 4;
    const F = 16

    return solution(N,F)
}

function solution(N,F) {


    const memo = new Array(N).fill([]).map(()=> new Array(N).fill(0))
    const DFS = (L,set = []) =>{ 
        // base case 
        if(L === N) {
            console.log(set)
            
            return ;
        }   
        for(let i = 1; i<=N;i++){
            if(L!== i && set.findIndex((element)=>element === i) === -1) {
                DFS(L+1,[...set,i])
            }
        }
    }
    DFS(0,[])
    return 0;
}





