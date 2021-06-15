const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {
    const p = stringToIntArray("23 87 65 12 57 32 99");
    const k = 32

    return solution(p,k)
}

function solution(p,k) {
    p.sort((a,b)=> a -b )

    let lt = 0; 
    let rt = p.length -1;

    while(true) {
        let mid = parseInt(( lt + rt ) / 2)
        if(p[mid] === k) {
            break;
        }
        else if (p[mid] > k ) rt = mid-1
        else lt = mid+1; 
    }
    console.log(p)
    return 0;
}





