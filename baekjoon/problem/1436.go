// 영화감독 숌

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	// 어떤 수에 6이 적어도 3개이상 연속으로 들어가는 수
	// 제일 작은 종말의 숫자는 666
	// 다음은 1666 2666 3666
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	index, _ := strconv.Atoi(scanner.Text())
	cnt := 0
	i := 665
	for {
		if cnt == index {
			fmt.Println(i - 1)
			return
		}
		if strings.Contains(strconv.Itoa(i), "666") {
			cnt++
		}
		i++
	}
}

// 666
// 1666
// 2666
// 3666
// 4666
// 5666
// 6661
// 6662
// 6663
// 6664
// 6665
// 6666
// 6667
// 6668
// 6669
// 7666
// 8666
// 9666
