//별 찍기 10

package main

import "fmt"

/*
***
* *
***
 */

var coordinate = [][]int{{0, 0}, {0, 1}, {0, 2}, {1, 0}, {1, 1}, {1, 2}, {2, 0}, {2, 1}, {2, 2}}

func main() {
	caseSize := 27

	solution(caseSize)

}

func solution(size int) {

	// 가로 세로 size만한 크기의 배열이 만든다

	recursive(size, 0, 0, 0)
}

func recursive(n int, dx int, dy int, debug int) {
	if debug == 10 {
		return
	}
	if n == 3 {
		return
	}
	fmt.Println(n, dx, dy)

	for i := 0; i < len(coordinate); i++ {
		//recursive(n, n/3*coordinate[i][0], n/3*coordinate[i][1], debug)
		//fmt.Println(n, n/3, coordinate)
	}

	recursive(n/3, 0, 0, debug+1)
}
