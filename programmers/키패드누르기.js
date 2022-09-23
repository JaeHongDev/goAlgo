function solution(numbers, hand) {
    var answer = '';
    const keyMap = {
        1:"L",
        4:"L", 
        7:"L",
        2:"C",
        5:"C",
        8:"C",
        0:"C",
        3:"R",
        6:"R",
        9:"R"
    }
    const lineMapping = {
        1: 1,
        2: 1,
        3: 1,
        4: 2,
        5: 2,
        6: 2,
        7: 3,
        8: 3,
        9: 3,
        0: 4
    }
    let recordLeftLine = 4;
    let recordRightLine = 4;
    let index = -1;
    for(let num of numbers ){
        index ++; 
        console.log(index,recordLeftLine, recordRightLine);
        const result = keyMap[num];
       	if(index === 8){
            console.log(result);
        }
        if(result === "L") {
            recordLeftLine = lineMapping[num];
            answer += "L"; 
        }
        if(result === "R") {
            recordRightLine = lineMapping[num];
            answer += "R";
        }
        if(result === "C"){
			const a= Math.abs(recordLeftLine  - lineMapping[num]);
            const b= Math.abs(recordRightLine - lineMapping[num]);
            if(index === 8 ){
                console.log(recordLeftLine, recordRightLine);
            }
            if(a > b) {
                answer+= "R";
                recordRightLine = lineMapping[num];
            }
            if(a < b) { 
                answer+= "L";
                recordLeftLine = lineMapping[num];
            }
            console.log("-",a,b,"-") 
            if(a === b ) {
              const pos = hand[0].toUpperCase(); 
              answer += pos;
              if(pos === "L") recordLeftLine = lineMapping[num];
              if(pos === "R") recordRightLine = lineMapping[num];
            } 
        }
    }
    return answer;
}
