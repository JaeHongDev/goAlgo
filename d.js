const arr = new Array(10).fill(0).map((_, i) => i)


console.log(

    [arr[1],...arr.filter(i=>i!==1)]
)
