function solution(a, b, n) {
    var answer = 0;
    
    while(n >= 2){
        n = parseInt(n / a) * b;
        answer += n;
    }
    return answer +1;
}
