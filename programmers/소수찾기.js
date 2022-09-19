function solution(n) {
    return getPrimeCount(n) 
}

function getPrimeCount(target){
	const arr = new Array(target+1).fill(false) ;
    arr[0] = true;
    arr[1] = true;

	for(let i = 2 ; i <= target; i ++){
        if(arr[i]) continue;
        for(let j = 2*i; j<=target;j +=i) arr[j] = true;
    }
    return arr.reduce((pre,cal) => cal ? pre: pre+1, 0);
}
