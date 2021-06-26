
const fs = require('fs');


const a = fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-9) === '.solve.js'))
    .sort((a,b)=>{
        const makeNum = (str) => {
            let index = str.indexOf(".")
            let num = ""
            for(let i = 0; i < index;i++){
                num+=str[i]
            }
            return num;
        }
        return makeNum(a) - makeNum(b)
    })
    .forEach(file => {
        console.log(`----------<fileName:${file}>----------$`)
        console.log(`result:${require(`./${file}`)()}`)
        console.log(`----------</fileName:${file}>---------$`)
        console.log();
        console.log();
        console.log();
        console.log();
        console.log();
    })

