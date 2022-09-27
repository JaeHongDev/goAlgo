function solution(people, limit) {
    return people.sort((a,b) => a - b).reduce((pre,cal) => {
        if(pre.now + cal < limit) return { ...pre, now:pre.now+cal, p:pre.p +1}
        if(pre.now + cal === limit) return {now:0, p:1, count:pre.count+ pre.p}
        return {now:0, p:1, count: pre.count + pre.p}
    }, {now:0, count:0, p:1}).count;

}

