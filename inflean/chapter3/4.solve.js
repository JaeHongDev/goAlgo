const util = require("./util")
module.exports = function () {
    const s = "teachermode";
    const c = "e"
    return soluton(s, c)
}

function soluton(str = "", c = "") {
    const a = str.split('e')
    console.log(a)
    const answer = [];
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "") answer.push(0);

        let cnt = 0;
        for (let j = 0; j < a[i].length; j++) {
            if (cnt <= i + a[i].length - cnt) {
                answer.push(cnt)
                console.log(a[i][j],i + a[i].length)
                cnt++
            }
            
            cnt++;
        }

        answer.push(0)
        cnt = 1;
    }
    console.log(answer)
    return 0;
}