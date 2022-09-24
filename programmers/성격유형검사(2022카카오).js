function solution(survey, choices) {
    
    const scoreTable = {
        "R":0,
        "T":0,
        "C":0,
        "F":0,
        "J":0,
        "M":0,
        "A":0,
        "N":0
    }
    
    var answer = ['R','C','J','A'];
    const score = [0,3,2,1,0,1,2,3];
	
    for(let [index,question] of survey.entries()){
        const [left,right] = question.split("")
        
        if(choices[index] > 4) scoreTable[right] += score[choices[index]];
        if(choices[index] < 4) scoreTable[left ] += score[choices[index]];
    }
   
    if(scoreTable["R"] < scoreTable["T"]) answer[0] = "T";
    if(scoreTable["C"] < scoreTable["F"]) answer[1] = "F";
    if(scoreTable["J"] < scoreTable["M"]) answer[2] = "M";
    if(scoreTable["A"] < scoreTable["N"]) answer[3] = "N";
    
    
    return answer.join("");
}
