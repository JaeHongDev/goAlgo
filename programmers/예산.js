function solution(d, budget) {
    return d.sort((a,b) => a - b).reduce((pre,cal) => {
		if(pre.budget < cal) return pre;       	
        return {
            budget: pre.budget - cal,
            count: pre.count+1
        }
    }, { budget, count:0}).count;
}
