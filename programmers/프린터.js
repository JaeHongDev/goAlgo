function solution(priorities, location) {
    let cnt = 0;
    while(location !== -1) {
	  const item = priorities.shift();
      let flag = true;
      for(let i = 0 ; i<priorities.length;i++){
    	if(priorities[i] > item) {
          location -= i + 1;
          if(location < 0 ) location += priorities.length+1;
          priorities.push(item,...priorities.splice(0,i))
          flag = false;
          break;
      	}
	  }
      if(!flag) continue;
      location--;
      cnt++;
        
    }
    return cnt;
}
