function solution(str1, str2) {
    var answer = 0;
    str1 = createAggregate(str1.toUpperCase());
    str2 = createAggregate(str2.toUpperCase());
    if(str1.length === 0 && str2.length === 0) return 65536;

    
    const {union, intersection} = getUnionAndIntersection(str1,str2)
    return Math.floor((union / intersection) * 65536);
}

function createAggregate(arr){
    const stack = [];
    for(let i = 0; i<arr.length-1;i++) {
     	if(arr[i].charCodeAt() < 65 ||  arr[i].charCodeAt() > 90) continue;
        if(arr[i+1].charCodeAt() < 65 || arr[i+1].charCodeAt() > 90) continue;
        stack.push(arr[i]+arr[i+1]);
    }
    return stack;
}

function getUnionAndIntersection(arr1, arr2){
    const arr1Map = new Map();
	const arr2Map = new Map();
    
    arr1.forEach(i=> arr1Map.set(i,arr1Map.has(i) ? arr1Map.get(i)+1 : 1));
    arr2.forEach(i=> arr2Map.set(i,arr2Map.has(i) ? arr2Map.get(i)+1 : 1));
    
    const item = [] 
	const arr = [...arr1Map.entries()].reduce((pre,cal) => {
        if(!arr2Map.has(cal[0])) {
            item.push(cal[0]); 
            return {
            	union: pre.union,
                intersection: pre.intersection + cal[1]
            };
        };
        
        const arr2Value = arr2Map.get(cal[0]);
        arr2Map.delete(cal[0]);
        const arr1Value = cal[1];
        return {
            union: pre.union + Math.min(arr2Value, arr1Value) ,
            intersection: pre.intersection + Math.max(arr2Value,arr1Value)
        }
    } ,{union:0, intersection:0});
    [...arr2Map.entries()].forEach(i=>arr.intersection += i[1])
    return arr;
}
