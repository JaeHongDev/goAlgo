function solution(record) {
    var answer = [];
	const recordTable = new Map();
    for(let i = 0 ; i < record.length;i++){
		const [division, userId, userName] = record[i].split(" ");
        if(division === "Enter" || division === "Change") recordTable.set(userId, userName);
    }
    
    for(let i = 0 ; i < record.length;i++){
		const [division, userId] = record[i].split(" ");
        if(division === "Enter") answer.push(`${recordTable.get(userId)}님이 들어왔습니다.`) 
        if(division === "Leave") answer.push(`${recordTable.get(userId)}님이 나갔습니다.`)
    }
    return answer;
}
