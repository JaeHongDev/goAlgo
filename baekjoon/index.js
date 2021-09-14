const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

function main() {
  const testCase = process.argv[2] // 2번째 인자에 문제 케이스를 입력받는다.

  const testCaseFile = require(`./problem/${testCase}.js`) // 문제 케이스에 맞는 파일을 불러옴

  const { solution } = testCaseFile // 메인 메서드 추출

  const input = []
  const lineEvent = (line) => {
    input.push(line.split(' ').map((el) => parseInt(el))) 
  }

  const closeEvent = () => {
    console.log(
      solution(input) // 함수 실행
    )
    process.exit()
  }
  rl.on('line', lineEvent).on('close', closeEvent)
}
main()
