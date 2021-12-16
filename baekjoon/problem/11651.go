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

	problem_case, _ := strconv.Atoi(scanner.Text())

	unsortedMatrix := make([][2]int, problem_case)

	for i := range unsortedMatrix {
		scanner.Scan()
		inputString := scanner.Text()

		inputArray := strings.Split(inputString, " ")
		dx, _ := strconv.Atoi(inputArray[0])
		dy, _ := strconv.Atoi(inputArray[1])
		unsortedMatrix[i][0], unsortedMatrix[i][1] = dx, dy
	}
	//fmt.Println(unsortedMatrix)
	sort.Slice(unsortedMatrix, func(i, j int) bool {
		if unsortedMatrix[i][1] == unsortedMatrix[j][1] {
			return unsortedMatrix[i][0] < unsortedMatrix[j][0]
		}
		return unsortedMatrix[i][1] < unsortedMatrix[j][1]
	})
	//fmt.Println(unsortedMatrix)

	for _, arr := range unsortedMatrix {
		fmt.Printf("%d %d\n", arr[0], arr[1])
	}
}
