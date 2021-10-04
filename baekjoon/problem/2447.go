//별 찍기 10

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

/*
***
* *
***
 */

var coordinate = [][]int{{0, 0}, {0, 1}, {0, 2}, {1, 0}, {1, 1}, {1, 2}, {2, 0}, {2, 1}, {2, 2}}
var board [][]bool

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	caseSize, _ := strconv.Atoi(scanner.Text())
	//caseSize := 81
	board = make([][]bool, caseSize)
	for i := 0; i < len(board); i++ {
		board[i] = make([]bool, caseSize)
	}
	//	fmt.Println(board)
	solution(caseSize)

	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[i]); j++ {
			if board[i][j] {
				fmt.Printf("*")
			} else {
				fmt.Print(" ")
			}
		}
		fmt.Println()
	}
}

func solution(size int) {

	// 가로 세로 size만한 크기의 배열이 만든다

	recursive(size, 0, 0, 0)
}

func recursive(n int, dx int, dy int, pos int) {
	if n == 3 {
		return
	}

	//fmt.Println(n, dx, dy)
	for i := 0; i < len(coordinate); i++ {
		selectN := n / 3
		selectDx := n / 3 * coordinate[i][0]
		selectDy := n / 3 * coordinate[i][1]

		if i != 4 {
			board[dx+selectDx][dy+selectDy] = true
			board[dx+selectDx][dy+1+selectDy] = true
			board[dx+selectDx][dy+2+selectDy] = true

			board[dx+1+selectDx][dy+selectDy] = true
			board[dx+1+selectDx][dy+2+selectDy] = true

			board[dx+2+selectDx][dy+selectDy] = true
			board[dx+2+selectDx][dy+1+selectDy] = true
			board[dx+2+selectDx][dy+2+selectDy] = true
			recursive(selectN, selectDx, selectDy, i)
		}
	}
}
