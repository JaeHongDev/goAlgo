function solution(new_id) {
    var answer = '';
    let result = new_id.toLowerCase()
    			 .replace(/[^0-9-a-z\._-]/g,"")
    			 .replace(/\.{2,}/g,".")
    			 .replace(/^(\.)/g,"")
    if(result === "") result += "a";
    
    result = result.slice(0,15)
		   .replace(/(\.)$/g,"")
    if(result.length <= 2) result += result[result.length-1].repeat(3-result.length)
    return result;
    			  
    			 
                          
}
