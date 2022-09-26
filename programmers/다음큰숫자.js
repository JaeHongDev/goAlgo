function solution(n) {
    var answer = 0;
    const count = n.toString(2).replace(/(0)/g,"").length;
    while(true){
        n+=1;
        if(n.toString(2).replace(/(0)/g,"").length === count) return n;
    }
    return answer;
}
