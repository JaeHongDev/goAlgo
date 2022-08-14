const fs = require('fs'); 
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';


// 1 1 
// 2 5
// 3 6 
// 4 7
// 카드 4개를 갖기 위해 구매하는 최대값은 10원


// 1  4 

// 1 1 1 1 
// 1 1 2 
// 전체의 부분집합을 구하고
// 최대값을 찾는다
// 10
// 10 
// 10 

const max = 10;
const sequence = new Array(max).fill(0);


function main(){
    const cases = 4;
    const sequence = [1,5,6,7]; 
    const cache = [0,...sequence]

    for(let i = 1; i<cases;i++){
        cache[i] = sequence[i];
        for(let k = 1; k <i;k++){ 
            cache[i] = Math.max(cache[i], cache[i - k] + cache[k])            
        }
    }
    console.log(cache);
}

main();
// 2
// 2
// 1 1 

// 3 
// 3
// 2 2
// 1 1 2 
