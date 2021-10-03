// 정수 N개의 합

package main

import (
	"bufio"
	"os"
	"strconv"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	input, _ := strconv.Atoi(scanner.Text())

	a := make([]int, input)
	for i := 0; i < input; i++ {
		a[i] = i
	}
	sum(a)

}

func sum(a []int) int {
	r := 0
	for _, i := range a {
		r += i
	}
	return r
}
