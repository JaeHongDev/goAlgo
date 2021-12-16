package main

import (
	"bufio"
	"fmt"
	"math/rand"
	"os"
	"sort"
	"strconv"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()

	caseNumber := scanner.Text()

	caseNumberSize := len(caseNumber) // 배열의 길이

	unsortedArr := make([]int, caseNumberSize)

	for i := 0; i < caseNumberSize; i++ {
		item, _ := strconv.Atoi(string(caseNumber[i]))
		unsortedArr[i] = item
	}

	//sortedArr := QuickSort(unsortedArr)
	sort.Ints(unsortedArr)
	sortedArr := unsortedArr
	answer := strings.Trim(strings.Replace(fmt.Sprint(sortedArr), " ", "", -1), "[]")
	fmt.Println(answer)

}

func QuickSort(unsortedArray []int) []int {

	if len(unsortedArray) < 2 {
		return unsortedArray
	}

	left, right := 0, len(unsortedArray)-1

	pivot := rand.Int() % len(unsortedArray)

	unsortedArray[pivot], unsortedArray[right] = unsortedArray[right], unsortedArray[pivot]

	for i := range unsortedArray {
		if unsortedArray[i] > unsortedArray[right] {
			unsortedArray[left], unsortedArray[i] = unsortedArray[i], unsortedArray[left]
			left++
		}

	}

	unsortedArray[left], unsortedArray[right] = unsortedArray[right], unsortedArray[left]

	QuickSort(unsortedArray[:left])
	QuickSort(unsortedArray[left+1:])

	return unsortedArray
}
