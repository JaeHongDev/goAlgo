const input = "querty";

let answer="";
for(let i = 0; i <input.length;i++){
    if(input[i] === "q"){
        answer += "e";
        continue; 
    }
    answer += input[i];
}
console.log(answer);