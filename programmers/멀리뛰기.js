function solution(n) {
    const cache = new Array(n+1).fill(0);

    cache[1] = 1;
    cache[2] = 2;
    for(let i = 3; i<= n; i++){
        cache[i] =  (cache[i-1] + cache[i-2]) % 1234567
    }
	return cache[n] ;
}
