function solution(progresses, speeds) {
    var answer = [];
    
    const timeStamp = [];
    for(let i = 0 ; i <progresses.length;i++){
       timeStamp.push(Math.ceil((100-progresses[i]) / speeds[i]));
    }
    
    let nowTime = timeStamp[0];
    let cnt = 1;
    for(let i = 1 ; i <timeStamp.length;i++){
        if(nowTime < timeStamp[i]){
            nowTime = timeStamp[i];
            answer.push(cnt);
            cnt = 1;
            continue;
        }
        cnt++;
    }
    answer.push(cnt);
    return answer;
}
