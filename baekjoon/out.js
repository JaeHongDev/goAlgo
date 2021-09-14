const fs = require('fs');
function main(){

  const testCase = process.argv[2] // 2번째 인자에 문제 케이스를 입력받는다.

  const testCaseFile = `${__dirname}/problem/${testCase}.js` // 문제 케이스에 맞는 파일을 불러옴

  fs.readFile(testCaseFile,'utf8',(err,data)=>{
    const content = `
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    function main() {
      const input = [];
      const lineEvent = (line) => {
        input.push(line.split(' ').map((el) => parseInt(el)));
      };
      const closeEvent = () => {
        ${data};
        console.log(
          solution(input)
        );
        process.exit();
      };
      rl.on('line', lineEvent).on('close', closeEvent);
    };
    main();
    `;
    fs.writeFile(`${__dirname}/out/${testCase}.js`,content/*.replace(/(\s*)/g, "")*/,(err)=>console.log(err));
  })
}

main();