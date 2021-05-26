const { exec } = require("child_process");
const [_, __, problem] = process.argv
exec(`cd ./inflean/chapter${problem} && npm run sovle`, (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        console.log(__dirname)
        return;
    }
});

