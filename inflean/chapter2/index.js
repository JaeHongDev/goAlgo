
const fs = require('fs');
const { pathToFileURL } = require('url');

const a = fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file.slice(-9) === '.solve.js'))
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
