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

	answerArray := make([]int, size)
	coordinate := make(map[int]int)

	scanner.Scan()
	coordinateArray := strings.Split(scanner.Text(), " ")

	sortKeys := make([]int, 0, len(coordinate))

	for i := 0; i < size; i++ {
		dx, _ := strconv.Atoi(coordinateArray[i])
		answerArray[i] = dx
		_, ok := coordinate[dx]
		if !ok {
			coordinate[dx] = 1
			sortKeys = append(sortKeys, dx)
		}
	}
	sort.Ints(sortKeys)
	for index, element := range sortKeys {
		coordinate[element] = index
	}
	for i := range answerArray {
		fmt.Print(coordinate[answerArray[i]])
		fmt.Print(" ")
	}
}
