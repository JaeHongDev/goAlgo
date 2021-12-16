package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()

	size, _ := strconv.Atoi(scanner.Text())
	unsorted2dArr := make([][2]int, size)

	unsorted2dArrSize := len(unsorted2dArr)

	for i := 0; i < unsorted2dArrSize; i++ {
		scanner.Scan()
		input := scanner.Text()
		inputs := strings.Split(input, " ")
		dx, _ := strconv.Atoi(inputs[0])
		dy, _ := strconv.Atoi(inputs[1])
		unsorted2dArr[i][0], unsorted2dArr[i][1] = dx, dy
	}
	sort.Slice(unsorted2dArr, func(i, j int) bool {
		for idx := range unsorted2dArr[i] {
			if unsorted2dArr[i][idx] == unsorted2dArr[j][idx] {
				continue
			}
			return unsorted2dArr[i][idx] < unsorted2dArr[j][idx]
		}
		return false
	})
	for _, arr := range unsorted2dArr {
		fmt.Printf("%d %d\n", arr[0], arr[1])
	}
}
