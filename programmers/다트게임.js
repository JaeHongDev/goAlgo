function solution(dartResult) {
    var answer = [];
    const hash = {
        "S" : 1, 
        "D" : 2,
        "T" : 3,
    }
    return dartResult
        .split(/(D|S|#|T|\*)/)
        .filter(i => i !== "")
        .reduce((pre,cal)=>{
                if(cal === "*") {
                    if(pre.length === 1) {
                        pre[pre.length - 1] = pre[pre.length-1] *2;
                        return pre;
                    }
                    pre[pre.length -1] = pre[pre.length-1] *2;
                    pre[pre.length -2] = pre[pre.length-2] *2;
                    return pre;
                } 
                if(cal === "#") {
                    pre.push(pre.pop() * -1);
                    return pre;
                }
                if(cal === "S" || cal === "D" || cal === "T") {
                    pre.push( Math.pow(pre.pop(), hash[cal]))
					return pre;                    
                }
                return [...pre,Number(cal)];
    	},[]).reduce((pre,cal) => pre+cal);
}
