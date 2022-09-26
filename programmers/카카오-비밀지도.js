function solution(n, arr1, arr2) {
    const arrMap1 = arr1.map(i=>i.toString(2));
    const arrMap2 = arr2.map(i=>i.toString(2));
    
    return arr1.reduce((pre,cal,index)=> {
    	let s1 = "0".repeat( n - arrMap1[index].length).concat(arrMap1[index]).split("");
	let s2 = "0".repeat( n - arrMap2[index].length).concat(arrMap2[index]).split("");
	return [...pre, s1.map((s,index) => s2[index] === "1" || s === s1[index] === "1" ? "#" : " ")] 
    }).join("")
}
