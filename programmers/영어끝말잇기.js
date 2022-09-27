function solution(n, words) {
    let beforeWord = words[0]
   	let recordWord = new Set([words[0]]);
    for(let i = 1 ; i < words.length;i++){
     	if(beforeWord[beforeWord.length-1] !== words[i][0] || recordWord.has(words[i])) return [i % n + 1 , Math.floor(i / n)  + 1 ];        
        recordWord.add(beforeWord = words[i]);
    } 
    return [0,0]
}
