package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {

	scanner := bufio.NewScanner(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)

	defer writer.Flush()
	counts := make([]int, 10001)

	scanner.Scan()

	n, _ := strconv.Atoi(scanner.Text())
	for i := 0; i < n; i++ {
		scanner.Scan()
		element, _ := strconv.Atoi(scanner.Text())
		counts[element]++
	}
	for i := 1; i < 10001; i++ {
		for j := 0; j < counts[i]; j++ {
			fmt.Fprintln(writer, i)
		}
	}
}
