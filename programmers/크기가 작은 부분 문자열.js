function solution(t, p) {
    var answer = 0;
    
    const length = p.length;
    let sum = [];
   
    for(let i = 1 ; i < t.length; i++){
       console.log(p, sum);
       if(sum.length === length){ 
           sum.pop(t[i-length]);
           sum.push(t[i]);
           if(p <= sum) answer += 1;
           continue;
       }
        
       sum.push(t[i]);
    }
    return answer;
}
