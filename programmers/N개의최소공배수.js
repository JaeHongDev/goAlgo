function solution(arr) {
    let answer = arr[0];
    for(let i = 1 ; i <arr.length;i++) answer = lcm(answer , arr[i]);
    return answer;
}

const gcd = (a,b) =>{
    if(b === 0) return a;
    return gcd(b , a % b);
}
const lcm = (a,b) =>{
    const [min,max]= [Math.max(a,b), Math.min(a,b)]
    return a * b / gcd(a,b);
}
