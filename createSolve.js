// 3 챕터
// 4 문제번호
const [_, __, chapter, problem] = process.argv;


const { exec } = require("child_process");


exec(`cp ./copy.js ./inflean/chapter${chapter}/${problem}.solve.js`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
});

