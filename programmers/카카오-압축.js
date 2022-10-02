function solution(msg) {
	var answer = [];
	const dictionary = new Map();
    for(let i = 65 ; i <= 90;i++) dictionary.set(String.fromCharCode(i),i-64);
    
    for(let i =0 ; i < msg.length;i++){
		let lastStr = msg[i];
        let lastIndex = dictionary.get(lastStr);
        for(let j = i+1; j<= msg.length;j++){
			if(dictionary.has(lastStr)){
				lastIndex =dictionary.get(lastStr);
                lastStr += msg[j];
                i = j - 1;
                continue;
            }
            dictionary.set(lastStr, dictionary.size +1);
            break;
        }
        answer.push(lastIndex);
    }
    return answer;
}
