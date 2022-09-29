function solution(cacheSize, cities) {
    if(cacheSize === 0) return cities.length * 5;
	return cities.map(city => city.toUpperCase())
        .reduce((pre,cal) => {
        	const cacheIndex = pre.cache.indexOf(cal)
            if(cacheIndex !== -1){
                pre.runtime +=1;
               	pre.cache.push(pre.cache.splice(cacheIndex,1)[0])
                return pre;
            }
            pre.runtime += 5;
            if(pre.cache.length === cacheSize){
                pre.cache.shift();
            }
            pre.cache.push(cal); 
            return pre;
    	},{
        runtime:0,
        cache: []
    } ).runtime;
}
