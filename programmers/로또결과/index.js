
/**
 * @Param{number []} num1
 * @Param{number[]} num2
 *  */ 

const rewardTable = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
}

function solution(num1= [], num2=[]){

    let  zeroNumberCount = 0;
    const findedNumbers = num1.filter(item=>{
    
        if(item === 0) zeroNumberCount++;
        return item !== 0;
    });

    findedNumbers.forEach(number=>{
        const findIndex = num2.indexOf(number);
        if(findIndex === -1) return; //        
        num2[findIndex] = -1;
    })
    
    
    let corectCount = num2.filter(num=> num === -1).length;
    
    // coorectCount 3 
    // zeroCount 3 
    
    return [rewardTable[corectCount + zeroNumberCount], rewardTable[corectCount]];
}


function testCase(expected,actual){
    console.log(`expected : ${expected} actual:${actual}`)
}
testCase(solution([4, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]), [3, 5]);
testCase(solution([0, 0, 0, 0, 0, 0],[38, 19, 20, 40, 15, 25]), [1, 6]);
testCase(solution([45, 4, 35, 20, 3, 9],[20, 9, 3, 45, 4, 35]), [1, 1]);
