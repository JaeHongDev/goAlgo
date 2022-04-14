let caseNumber = 5;


const board = new Array(5).fill(0).map(_=>new Array(5*2-1).fill("")) 

for(let i=0;i<board.length;i++){
    let cnt = 5-i-1;
    for(let j = 0; j<= (board[i].length-1) /2;j++){
        console.log(j,cnt)
        if(j >= cnt) board[i][j] = "*";
        
    }
    cnt = i;
    for(let j = board[i].length; j>= (board[i].length-1) /2;j--){
        if(j < cnt+5) board[i][j] = "*";
    }
}
for(let i = 0; i<board.length;i++){
    let string =""; 
    console.log(board[i].toString().replace(/\,/g, " "));
} 
