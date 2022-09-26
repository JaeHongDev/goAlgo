function solution(s){
    const stack = [];
    for(let i = 0 ; i < s.length;i++){
        if(s[i] === "(") stack.push(s[i])
        if(s[i] === ")") {
            const last = stack.pop();
            if(last === undefined) return false;
            if(last === ")") return false;
        }
    }
    if(stack.length >= 1) return false;
    return true;
}
