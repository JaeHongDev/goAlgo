const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {

    const p = 7;
    return solution(p)
}

function solution(p) {
    const arr = new Array(7).fill(1).map((_,index)=>index+1);
    const DFS = (vertax) => {

        // base case
        if(vertax >= 8) return ;

        DFS(vertax * 2);
        console.log(arr[vertax-1])
        DFS(vertax * 2 +1)


    }
    DFS(1)

    return 0; 
}





