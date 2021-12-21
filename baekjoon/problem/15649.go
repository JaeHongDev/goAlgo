package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"time"
)

func main() {
	startTime := time.Now()
	scanner := bufio.NewScanner(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	scanner.Scan()
	input := strings.Split(scanner.Text(), " ")
	answer := ""
	last, _ := strconv.Atoi(input[0])
	size, _ := strconv.Atoi(input[1])
	func() {
		var dfs func(sequence []int, check []bool)
		dfs = func(sequence []int, check []bool) {

			// base case
			if len(sequence) == size {
				for _, element := range sequence {
					fmt.Fprintf(writer, "%d ", element)
				}
				// answer += "\n"
				fmt.Fprintln(writer)
				return

			}

			for i := 1; i <= last; i++ {
				if !check[i] {
					check[i] = true
					dfs(append(sequence, i), check)
					check[i] = false
				}
			}
		}

		dfs(make([]int, 0), make([]bool, 10))
	}()
	fmt.Println(answer)
	elapsedTime := time.Since(startTime)

	fmt.Printf("실행시간: %s\n", elapsedTime)
}
