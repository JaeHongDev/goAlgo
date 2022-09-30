function solution(s) {
    var answer = 0;
    s = s.split("");
	for(let i =0 ; i <s.length-1;i++){
        IsCorrect(s.join("")) ? answer++ : "";
        s.push(s.shift());
    }   
    return answer;
}
function IsCorrect(s){
    const stack = [];
    const bracketTable = {
        "(" : ")",
        "{" : "}",
        "[" : "]", 
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    for(let i = 0 ; i <s.length;i++){
        if(s[i] === ")" || s[i] === "}" || s[i] === "]"){
            if(stack.length === 0) return false;
            if(stack.pop() !== bracketTable[s[i]]) return false
            continue;
        }
        stack.push(s[i]);
    }
    if(stack.length === 0) return true;
    return false;
}
