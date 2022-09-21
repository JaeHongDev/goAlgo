function solution(N, stages) {
    let count = stages.length;
    const clearStagedTable = new Map() ;
    
    for(let i = 1 ; i<= N; i++) clearStagedTable.set(i,0);
    
    stages.forEach(stage=> {
        if(stage === N+1) return ; 
        clearStagedTable.set(stage, clearStagedTable.get(stage) + 1 )
    });
    
    return [...clearStagedTable.entries()].map((i) => {
        const failPercent = count > 0 ? i[1] / count :0
        count -=i[1];
        console.log({stage:i[0],failPercent})
        return { 
            stage:i[0],
            failPercent
        }
    }).sort((a,b) => {
        	 if(a.failPercent === b.failPercent){
                 return 1
             }
             return  b.failPercent - a.failPercent
    }).map((i)=> i.stage) 
} 
