function solution(s, n) {
    return s.split("").map((i) => String.fromCharCode(cal(i,n))).join("")
}
function cal(c,n) {
	if(c === " ") return c.charCodeAt();
    if(c.charCodeAt() <= 90 && c.charCodeAt() >= 65) {
        const num = c.charCodeAt() + n;
        if(num > 90) return num - 90 + 64; 
        return num;
    }
    if(c.charCodeAt() <= 122 && c.charCodeAt() >=97) {
        const num = c.charCodeAt() + n;
        if(num > 122) return num - 122 + 96;
        return num ;
    }
}           
