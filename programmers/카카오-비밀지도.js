function solution(n, arr1, arr2) {
    var answer = [];
    const a = arr1[0].toString(2)
   	const arrMap1 = arr1.map(i=>i.toString(2));
    const arrMap2 = arr2.map(i=>i.toString(2));
    
    for(let i = 0 ; i < n ; i++ ) {
        let s1 = "0".repeat( n - arrMap1[i].length).concat(arrMap1[i]).split("");
	    let s2 = "0".repeat( n - arrMap2[i].length).concat(arrMap2[i]).split("");
       	answer.push(s1.map((s,index)=>{
            if(s2[index] === "1" || s === "1") return "#"
            return " ";
        }).join(""))
        
    }
    return answer;
}
