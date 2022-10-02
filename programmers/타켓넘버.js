function solution(numbers, target) {
    var answer = 0;
    let sum = 0;
    const dfs = (level) => {
        if(level === numbers.length){
            if(sum === target) answer++;
            return ;
        }

        sum += numbers[level];
        dfs(level+1);
        sum -= numbers[level];
        sum += numbers[level] * -1;
        dfs(level+1);
        sum -= numbers[level] * -1;
    }
    dfs(0); 
    return answer;
}
