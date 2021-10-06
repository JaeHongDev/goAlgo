package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"sort"
	"strconv"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	size, _ := strconv.Atoi(scanner.Text())

	numHash := make(map[int]int)
	//numHash := map[int]int{-1: 2, -2: 2, -3: 1}
	for i := 0; i < size; i++ {
		scanner.Scan()
		key, _ := strconv.Atoi(scanner.Text())
		numHash[key]++

	}
	mostFrequency := 0
	numArr := make([]int, 0, len(numHash))
	for key, value := range numHash {
		if mostFrequency < value {
			mostFrequency = value
		}
		numArr = append(numArr, key)
	}

	sort.Ints(numArr)
	avg := 0.0
	fre := 0
	cnt := 0
	for _, value := range numArr {
		if numHash[value] == mostFrequency && cnt < 2 {
			fre = value
			cnt++
		}
		avg += float64(value)
	}
	fmt.Println(math.Round(avg / float64(len(numArr))))
	fmt.Println(numArr[len(numArr)/2])
	fmt.Println(fre)

	if len(numArr) != 1 {
		fmt.Println(numArr[len(numArr)-1] - numArr[0])
	} else {
		fmt.Println(0)
	}

}
