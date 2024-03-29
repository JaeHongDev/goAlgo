let data = `6
6
10
13
9
8
1`;

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

data = fs.readFileSync(filePath)
    .toString()
    .trim()
const [inputNumber, ...inputs] = data.split("\n").map(Number);

console.log(solution(inputNumber,inputs));

/**
 *
 * @param {number}size
 * @param {number[]}inputs
 */
function solution(size, inputs){


    const cache = new Array(size+1).fill(0);

    cache[1] = inputs[0];
    cache[2] = cache[1] + inputs[1];

    for(let i = 3; i <= size;i ++ ){
        cache[i] = Math.max(cache[i-2] + inputs[i-1], cache[i-3] + inputs[i-2] + inputs[i-1])
    }

    console.table(cache);

}


/**
 * @description 효주는 포도주 시식회에 갔다. 그 곳에 갔더니, 테이블 위에 다양한 포도주가 들어있는 포도주 잔이 일렬로 놓여 있었다. 효주는 포도주 시식을 하려고 하는데,
 * 여기에는 다음과 같은 두 가지 규칙이 있다.
 *
 * 포도주 잔을 선택하면 그 잔에 들어있는 포도주는 모두 마셔야 하고, 마신 후에는 원래 위치에 다시 놓아야 한다.
 * 연속으로 놓여 있는 3잔을 모두 마실 수는 없다.
 * 효주는 될 수 있는 대로 많은 양의 포도주를 맛보기 위해서 어떤 포도주 잔을 선택해야 할지 고민하고 있다. 1부터 n까지의 번호가 붙어 있는 n개의 포도주 잔이 순서대로 테이블 위에 놓여 있고, 각 포도주 잔에 들어있는 포도주의 양이 주어졌을 때, 효주를 도와 가장 많은 양의 포도주를 마실 수 있도록 하는 프로그램을 작성하시오.
 *
 * 예를 들어 6개의 포도주 잔이 있고, 각각의 잔에 순서대로 6, 10, 13, 9, 8, 1 만큼의 포도주가 들어 있을 때, 첫 번째, 두 번째, 네 번째, 다섯 번째 포도주 잔을 선택하면 총 포도주 양이 33으로 최대로 마실 수 있다.
 */
function description(){
    /**
     * 포도주가 일렬로 놓여 있음.
     * 2가지 규칙이 존재함
     *
     * 1. 포도주 잔을 선택하면 그 잔에 들어있는 포도주는 모두 사신다.
     * 2. 연속으로 놓여 있는 3잔을 모두 마실 수 없다.
     *
     * 6개의 포도주 잔이 있다고 가정하면
     *
     * 6 10 13 9 8 1 만큼 포도주가 있을때 최대가 되는 경우
     *
     * 6 10
     *
     * 세번째 포두주를 마신다고 가정할떄
     * X X O
     * X O O
     * O X O
     *
     * 이렇게 3가지 경우의 수가 존재합니다.
     *
     * 그럴 때 우리는 1,2,3 번째 중에서 어느 것이 가장 마신 잔이지 알 필요가 있습니다.
     *
     * 다음 예시를 위해 추가로 선택할때
     * 4번째 잔을 마시는 경우는
     * | X X O
     * | X O O
     * | O X O
     * 마찬가지로 3가지 조건이 존재합니다.
     *
     * 하지만 세번째 조건을 선택하기 위해서는 이전에 포도주를 마시지 않아야 합니다.
     *
     * 그렇기 때문에 정리를 하면
     * 패턴이 3가지로 나옵니다. [OXO,XOO,XXO]
     * 첫 번째 조건을 선택하기 위해서는 이전에 포두주를 마셨는지 혹은 마시지 않았는지를 확인해야합니다.
     * [OXO]O
     * [XOO]
     *
     * 점화식을 설정하기 전에 문제를 간략하게 나눈다.
     *
     * 4번째 잔을 마시기 위해서
     * OOXO
     * OXXO
     * XXXO
     * OOXO
     *
     * OOXO
     * XOXO
     * OXOO
     * XXOO
     * OXXO
     * XXXO
     * 총 6개의 경우가 나온다 즉
     * 이전에 선택한 경우에서 이후에 추가될 경우를 계산해서 대응을한다.
     *
     *
     * 6 10 13 9 8 1
     *
     * 6 10 13
     *
     * 13
     * 6 13
     * 10 13
     *
     * 1
     *
     *
     * 10 20 10 40
     *
     * 10 10
     * 20
     * 10 40
     */
}
