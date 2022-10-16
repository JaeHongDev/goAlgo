function solution(number) {
    var answer = 0;
    let sum = []; 
    const dfs = (index) =>{
      
        if(index > number.length){
            return ; 
        }
        if(sum.length === 3){
            answer += sum.reduce((pre,cal) => pre + cal, 0) === 0 ? 1 : 0 ;
            return ;
        }
        sum.push(number[index]);  
        dfs(index+1);
        sum.pop();
        dfs(index+1);
    }
    dfs(0);
    return answer;
}
