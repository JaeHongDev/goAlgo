package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"time"
)

var coordinate = [][]int{{0, 0}, {0, 1}, {0, 2}, {1, 0}, {1, 1}, {1, 2}, {2, 0}, {2, 1}, {2, 2}}

var board [][]bool

func main() {
	startTime := time.Now()
	scanner := bufio.NewScanner(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	defer writer.Flush()
	scanner.Scan()
	caseSize, _ := strconv.Atoi(scanner.Text())
	board = make([][]bool, caseSize)
	for i := 0; i < len(board); i++ {
		board[i] = make([]bool, caseSize)
	}
	recursive(caseSize, 0, 0)
	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[i]); j++ {
			if board[i][j] {
				writer.WriteString("*")
			} else {
				writer.WriteString(" ")
			}
		}
		writer.WriteString("\n")
	}
	elapsedTime := time.Since(startTime)
	fmt.Println()
	fmt.Printf("실행시간: %s\n", elapsedTime)
}

func recursive(size int, dx int, dy int) {
	if size == 3 {
		for i := 0; i < 3; i++ {
			for j := 0; j < 3; j++ {
				if i != 1 || j != 1 {
					board[i+dx][j+dy] = true
				}
			}
		}
		return
	}

	for i := 0; i < len(coordinate); i++ {
		if i != 4 {
			selectN := size / 3
			selectDx := size / 3 * coordinate[i][0]
			selectDy := size / 3 * coordinate[i][1]
			recursive(selectN, dx+selectDx, dy+selectDy)
		}

	}

}
