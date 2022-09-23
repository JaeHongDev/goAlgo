const positionTable = {
    1: [1,1],
    2: [1,2],
    3: [1,3],
    4: [2,1],
    5: [2,2],
    6: [2,3],
    7: [3,1],
    8: [3,2],
    9: [3,3],
  "*": [4,1],
    0: [4,2],
  "#": [4,3]
}
function keyMap(key){ 
    switch (key){
        case 1:
        case 4:
        case 7:
          return "L"
        case 2:
        case 5:
        case 8: 
        case 0: 
          return "C"
        case 3:
        case 6:
        case 9:
          return "R"
    }
}

const calculatePositionXY = (targetA, targetB) =>  Math.sqrt(Math.abs(targetA[0] - targetB[0]) + Math.abs(targetA[1] - targetB[1]));


function solution(numbers, hand) {
    var answer = '';
	const myHand = hand[0].toUpperCase();
    return numbers.reduce((pre,cal) => {
        const findKey = keyMap(cal);
        if(findKey === "L") return {...pre, left:cal, result: pre.result.concat(findKey)}
        if(findKey === "R") return {...pre, right:cal, result: pre.result.concat(findKey)}
        
       	const leftPositionDistence = calculatePositionXY(positionTable[pre.left], positionTable[cal])
        const rightPositionDistence = calculatePositionXY(positionTable[pre.right], positionTable[cal])
        
        if(leftPositionDistence < rightPositionDistence) return {...pre, left:cal, result:pre.result.concat("L")}
        if(leftPositionDistence > rightPositionDistence) return {...pre, right:cal, result:pre.result.concat("R")}
        
        if(myHand === "L") return {...pre, left:cal, result:pre.result.concat("L")}
        if(myHand === "R") return {...pre, right:cal, result:pre.result.concat("R")}
       	
    }, {left:'*', right:'#', result:""}).result;
}

