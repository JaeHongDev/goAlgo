function solution(n,a,b)
{
    let cnt;
    for(let i =1 ;i <= 20; i++)
	{
        if(Math.pow(2, i) === n) 
		{
			cnt = i + 1;                
            break;
        }
    }
    [a,b] = [Math.min(a,b),Math.max(a,b)]
  	while(n !== 1){
        n /= 2;
        cnt--;
        if(a <= n && b <= n) continue;
        if(a >  n && b > n) {
            a -= n;
            b -= n;
            continue;
        }
        return cnt;
    }
}
