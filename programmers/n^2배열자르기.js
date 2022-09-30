function solution(n, left, right) {
    const nums = []
    for(let i = left+1 ;i<= right+1; i++){
        nums.push(num(Math.ceil(i/n) -1,(i-1) % n))
   	}
    return nums;
}
function num(x,y) {
    if(x > y) return x+1;
    return y+1;
}
