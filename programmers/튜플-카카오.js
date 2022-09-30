function solution(s) {
    return [...JSON.parse(s.replace(/\{/g,"[")
     .replace(/\}/g,"]"))
     .reduce((pre,cal)=> {
        pre.counter.has(cal) 
		cal.forEach(item=>{
            pre.counter.set(item,pre.counter.has(item) ? pre.counter.get(item)+1:1);
        })
		return pre;
      }, {
        counter: new Map()
    }).counter.entries()].sort((a,b)=> b[1] - a[1]).map(i=>i[0])
}
