function solution(people, limit) {
    people.sort((a,b) => a-b);
    if(people[0] + people[1] > limit) return people.length;
    let answer = 0;
    let sum = people.shift();
   
    while(people.length){
        const item = people.pop();
        sum += item;
        if(sum > limit){
            answer += 1;
            sum -= item;
            continue;
        }
        answer += 1;
        sum = people.shift();
    }
    if(sum < limit) return answer + 1;
    return answer;
}
