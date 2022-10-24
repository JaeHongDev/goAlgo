function solution(a, b, n) {
    var answer = 0;
    let emptyBottle = 0;
    let bottle = n;
    while (bottle >= a ) {
		emptyBottle = parseInt(bottle / a ) * b; 
	    bottle = emptyBottle + (bottle % a);
        answer += emptyBottle;
    }
 	return answer;   
}
