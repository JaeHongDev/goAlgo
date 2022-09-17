function solution(n) {
    var answer = 0;
    const num = toTernary(n).reverse();0
    console.log(num)
    const num1 = num.map((i,index)=> i * Math.pow(10,index));
    console.log(num1);
    return answer;
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
