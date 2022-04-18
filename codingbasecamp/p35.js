function one(n){
    function two(){
        console.log(n);
    }
    return two;
}

console.log(one(1)(10))