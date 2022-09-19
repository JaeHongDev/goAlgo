function solution(n) {
    return toTernary(n)
        .reverse()
        .map((i,index)=> i * Math.pow(3,index))
        .reduce((pre,cal) => pre+cal,0);
}
function toTernary(n){
	const num = []; 
    while(n /3 !== 0){
        let t = n%3;
        num.push(t); 
        n -= t; 
        n /= 3;
    }
    return num
}
