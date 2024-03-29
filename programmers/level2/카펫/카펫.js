/**
 *
 * @param {number} brown
 * @param {number} yellow
 * @returns {*[]}
 */
function solution(brown, yellow) {
    console.log(`>>> input brown :${brown}  yello:${yellow}`)
    const answer = [];

    const yellowSquareSizes = [];

    for(let i = yellow; i> 0; i--){
        console.log(i);
        let index = 0;
        const dfs = (level) =>{
            if(level === i){
                return ;
            }
            dfs(level+1);
            dfs(level -1);
        }
    }
    return answer;
}

function test(runner,expected){
    console.log(`======================`);
    const actual = runner();
    console.log(`>>> result ${actual} : expected ${expected}`)
    console.log("======================");
    console.log("");
}

/*
test(()=>solution(10,	2),	[4, 3])
test(()=>solution(8,	1),	[3, 3])
test(()=>solution(24,	24),	[8, 6])
test(()=>solution(24,	23),	[8, 6])
*/
fullSearchTest(9);

/**
 *
 * @param {number}num
 */
function fullSearchTest(num){

    /**
     *
     * @param {number} level
     */
    const cache = new Array(num+1).fill(0);

    const dfs = ( level) =>{
        if(level === num+1){
            return ;
        }
        if(num - level < level){
            return ;
        }
        console.log(">>>")

        console.log(level);
        console.log(num - level);
        dfs(level + 1);
    }

    dfs(0);

    /**
     * 3
     *
     * 2 1
     * 1 2
     * 3 0
     * 0 3
     *
     * 4
     * 4
     * 3 1
     * 2 2
     *
     * 5
     * 5 0
     * 4 1
     * 3 2
     * 3 1 1
     *
     * 6
     * 6 0
     * 5 1
     * 4 2
     * 4 1 1
     * 3 3
     * 3 2 1
     *
     */
}

/**
 * 1. 노란색을 기준으로 빨간색이 주위를 감싼다.
 * ex) yellow : 1
 * xxx
 * xox
 * xxx
 * 즉 노란색 카펫이 1일경우 최소한 빨간색이 8개가 필요하다.
 *
 * yellow : 2
 * xxx xxxx
 * xox xoox
 * xox xxxx
 * xxx
 *
 * 노란색이 2개일 경우
 * case1) 빨간색은 12개 노란색은 2개
 * case2) 빨간색은 10개 노란색은 2개
 * 가 필요하다
 *
 * 빨간색을 가로로 전개할 경우 노란색이 위치한칸 +2가 필요함
 * ex) 1 -> 3
 * ex) 2 -> 4
 *
 * 빨간색을 세로로 전개할 경우 노랜색은 현재위치한 칸에서 세로로 전개한 칸수 +2개와 양옆을 감싸는 2개가 더 필요로 한다.
 * 즉 세로로 전개하는 경우 가로로 전개하는 개수보다 무조건적으로 많을 수 밖에 없다.
 * 그렇기에 한쪽으로 늘리는 선택지에서는 무조건 세로로 늘리는 선택지를 골라야한다.
 *
 * 하지만 노란색이 3개인 경우가 있다.
 * 그런 경우 세로로 전개할때 노란색 3칸을 덮기 위해서는 (3 + 2) * 2 + 2 12개가 들어간다.
 * 반면 가로로 전개하는 경우 (1 + 2) * 3 + 2 * 3 개가 필요하다. 현재 상황에서도 마찬가지로 가로로 전개하는 것이 더 효율적인 연산이 가능하다.
 *
 * 노란색이 4개인 경우를 보자
 * 먼저 노란색이 4개인 경우 전개할때 나타낼 수 있는 경우의 수는 ( 1 x 4 ) (2 x 2) (4 x 1 )이 존재한다.
 * 이럴 경우 가로로 전개할때 들어가는 빨간색의 수는 (4 + 2) * 2 + 2 14개가 필요하다
 *
 * 세로로 전개한 경우 (1 + 4 ) * 2 + 2 * 4로 18개가 필요로한다.
 *
 * 가로 세로 2x2의 형태로 전개한 경우
 * xxxx
 * xoox
 * xoox
 * xxxx
 * (2 + 2) * 2 + 2 * 2 = 12개만 필요로 한다.
 *
 * 즉 우리는 한쪽으로 늘리는 것보다 한칸을 내리는 선택지가 오히려 더 효율적인 경우가 생길 수 있다.
 *
 * 즉 정리하자면
 *
 * 세로로 늘리는 경우 ( 세로로 전개할때 필요로 하는 노란색 타일 숫자 + 2) * 2 + ( 가로로 전개할때 필요로 하는 타일의 숫자 + 2 )
 *
 * 노란색이 1일 경우
 * 가로 1 세로 1
 * (1 + 2) * 2 + ( 1 + 2 )
 *
 * 노란색 타일이 2인 경우
 * 가로로 전개할 때
 * (2 + 2) * 2 + (2 + 2)
 * 세로로 전개할 때
 * (1 + 2) * 2 + (1 + 2) * 2
 * 가 발생한다
 *
 * 즉 여기서 각 변숫값을 정의하면
 * (x + 2) * 2 + ( y + 2) * z
 *
 * x 는 가로의 타일 숫자 이며
 * y 는 세로의 타일 숫자 갯수이며
 * z 는 세로로 나열된 타일의 갯수이다
 *
 *
 */
