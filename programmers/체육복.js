function solution(n, lost, reserve) {
	
    lost = lost.filter(l =>{
        const findIndex = reserve.findIndex((r)=> r===l);
        if(findIndex === -1) return true;
        reserve.splice(findIndex,1);
        return false;
    })
    var answer = n - lost.length;
    
    lost.sort((a,b)=> a - b);
    reserve.sort((a,b) => a - b);
    while(1){
        if(lost.length === 0 || reserve.length === 0) break;
        const l = lost.pop();
        const r = reserve.pop();
       
        if(l - 1  === r || l + 1  === r) {
            answer += 1;
            continue;
        }
        if(l - 1 > r) {
            reserve.push(r) 
        }else{
	        lost.push(l);
        }
    }
    return answer;
}
