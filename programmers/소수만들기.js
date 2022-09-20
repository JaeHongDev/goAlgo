
function solution(nums) {
    var answer = 0;
	
    const set = [];
    const cachedPrime = setPrime();
   	const dfs = (arr,index) => {
    	if(arr.length === 3) {
			const num = arr.reduce((pre,cal) => pre+cal, 0);
            if(cachedPrime[num]) return;
           	answer +=1;
            return ;
        }
		if(index === nums.length ) return ;
        
       	arr.push(nums[index])
        dfs(arr, index+1)
        arr.pop();
        dfs(arr, index+1)
    }
    dfs([],0);
    return answer;
}

function setPrime(){
	const cachedPrime = new Array(3000+1).fill(false);
    cachedPrime[0] = true;
    cachedPrime[1] = true;
    
    for(let i = 2; i <= 3000; i ++){
        if(cachedPrime[i]) continue;
        for(let j = 2*i; j<=3000; j+= i) cachedPrime[j] = true;
    }
    return cachedPrime;
    
}
