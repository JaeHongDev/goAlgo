package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	size, _ := strconv.Atoi(scanner.Text())
	arr := make([]int, size)
	for i := 0; i < size; i++ {
		scanner.Scan()
		value, _ := strconv.Atoi(scanner.Text())
		arr[i] = value
	}
	sort.Ints(arr)
	sum := 0
	for i := range arr {
		// 산술 평균
		sum += arr[i]

	}
	fmt.Println()
	fmt.Printf("%d\n", sum/len(arr))
	fmt.Printf("%d\n", arr[len(arr)/2-1])
	fmt.Printf("%d\n", arr[1])
	if arr[0] < 0 {
		arr[0] = arr[0] * -1
	}

	if arr[len(arr)-1] < 0 {
		arr[len(arr)-1] = arr[len(arr)-1] * -1
	}
	fmt.Printf("%d", arr[0]+arr[len(arr)-1])

}
