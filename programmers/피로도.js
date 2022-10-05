function solution(k, dungeons){

    let answer = 0;
    let count = 0;
    dungeons.sort((a,b) => b[0] - a[0])


    const temp = []
    const find = (index) => {
      if(temp.length === dungeons.length){
        count = 0;
        let p = k; 
        for(let i = 0 ; i < temp.length;i++){
            if(p < dungeons[temp[i]][0]) {
                answer = Math.max(answer, count);
                return ;
            }
            count++;
            p -= dungeons[temp[i]][1];
        }
        answer = Math.max(answer, count) ;
        return 
      }
      for(let i = 0 ; i< dungeons.length; i++){

        const idx = temp.findIndex(item => item === i);
        if( idx ===-1){
            temp.push(i);
            find(index+1) ;
            temp.pop();
        }
      }
    }
    find(0);
    return answer;
}
