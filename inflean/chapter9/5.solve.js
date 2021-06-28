const stringToArray = (string = "") => string.trimEnd().split(" ");
const stringToIntArray = (string) => stringToArray(string).map(item => parseInt(item))
const stringToSplitArray = (string = "") => string.trimEnd().split("")

module.exports = function () {

    const p = 5; 
    const k = 14;
    return solution(p,k)
}

function solution(p,k) {
    let answer = 0;
    const ch = new Array(10001).fill(0);
    const dis = new Array(10001).fill(0);

    const queue = [];
    queue.push(p);
    ch[p] = 1; 
    dis[p] = 0;

    while(queue.length) {
        let x = queue.shift();
        for(nx of [x-1,x+1,x+5]){
            if(nx === k) return dis[x] =1; 
            if(nx > 0 && nx <= 10000 && ch[nx] === 0) {
                ch[nx] =1;
                queue.push(nx);
                dis[nx]=dis[x] +1;
            }
        }
        break;
    }
    return answer;
}






