// 수 정렬하기
package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"strconv"
)

func quicksort(a []int) []int {
	if len(a) < 2 {
		return a
	}

	left, right := 0, len(a)-1

	pivot := rand.Int() % len(a)

	a[pivot], a[right] = a[right], a[pivot]

	for i := range a {
		if a[i] < a[right] {
			a[left], a[i] = a[i], a[left]
			left++
		}
	}

	a[left], a[right] = a[right], a[left]

	quicksort(a[:left])
	quicksort(a[left+1:])

	return a
}
func main() {
	scanner := bufio.NewScanner(os.Stdin)
	writer := bufio.NewWriter(os.Stdout)
	defer writer.Flush()
	scanner.Scan()
	size, _ := strconv.Atoi(scanner.Text())
	a := make([]int, size)
	for i := 0; i < size; i++ {
		scanner.Scan()
		a[i], _ = strconv.Atoi(scanner.Text())
	}
	//a := []int{2, 6, 3, 2, 1}

	a = quicksort(a)
	for i := range a {
		fmt.Fprintln(writer, a[i])
	}
}
