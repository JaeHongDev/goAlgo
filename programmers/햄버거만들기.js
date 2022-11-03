function solution(ingredient) {
    var answer = 0;
    const stack = []
    let flag = false;
    for(let i = 0 ; i < ingredient.length; i++){
        if(ingredient[i] === 1){
          flag =true; 
          continue; 
        }
        if(flag && ingredient[i] ===2){
            if(stack.length === 0) {
                continue;
            } 
            answer++;
            while(stack.length){
                stack.pop();
            }
            flag =false;
            continue;
        }
        stack.push(1);
    }
    return answer;
}
