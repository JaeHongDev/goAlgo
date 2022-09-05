function solution(answers = []) {
  const case1 = [1, 2, 3, 4, 5];
  const case2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const case3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  const cases = [case1, case2, case3];
  
  let Answer = [];
  
  
  let nowCount = 0;
  cases.forEach((userCase,index)=>{
      let count = 0;
    for(let i = 0; i < answers.length ; i++ ){
        const answer = answers[i]; 
        
   	 	if(answer === userCase[i % userCase.length  ]){
            count++; 
        }
    }
    if(nowCount > count){
        return ; 
    }
    if(nowCount < count){
        Answer = []; 
    }
    nowCount = count;
      
    Answer.push(index+1);
    
  })
	return Answer;
}
