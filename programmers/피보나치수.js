function solution(n) {
    const cache = new Array(n+1).fill(0n);
    cache[0] = 0n;
    cache[1] = 1n;
    for(let i = 2; i<=n ; i++){
        cache[i] = cache[i-1] + cache[i-2] ;
    }
    return cache[n] % 1234567n;
}
