function solution(s) {
    var answer = [0,0];
    
    const convertBinary = (s) => {
        if(s === "1") return;
        const findOneCount = s.split("").filter(item=> item === "1").length; 
        answer[0] += 1;
        answer[1] += s.length - findOneCount;
       	convertBinary(findOneCount.toString(2))
    }
    convertBinary(s);
    return answer;
}
      
