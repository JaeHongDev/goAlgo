
module.exports = function ([day, numbers]) {
    let cnt = 0;
    console.time("t1")
    for (let i = 0, j = numbers.length; i < j; i++) {
        if (day == numbers[i].toString()[1]) cnt++
    }
    console.timeEnd("t1")
    let cnt1 = 0;
    
    console.time("t2")
    for (let i = 0, j = numbers.length; i < j; i++) {
        if (day === numbers[i] % 10) cnt1++
    }
    console.timeEnd("t2")
    return cnt
}

/*

*/