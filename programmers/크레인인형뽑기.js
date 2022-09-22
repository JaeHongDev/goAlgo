
function solution(board, moves) {
    var answer = 0;
    const bucket = new Bucket();
    for(let moveIndex of moves){
        for(let i = 0; i < board.length ; i ++ ){
            const findNumber = board[i][moveIndex-1];
            if(findNumber === 0) continue;
            board[i][moveIndex-1] = 0;
            bucket.push(findNumber);
            break;
        }
    }
    return bucket.count;
}
class Bucket {
    constructor(){
        this.items = [];
        this.count = 0;
    }
    push(number){
        this.items.push(number);
        this.clear();
    }
    clear(){
        if(this.items.length < 2 ) return ;
        if(this.items[this.items.length - 1] === this.items[this.items.length - 2]) {
            this.count += 2;
            this.items.pop();
            this.items.pop();
        }
    }
} 
