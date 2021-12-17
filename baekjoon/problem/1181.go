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
	inputString := scanner.Text()
	problemCase, _ := strconv.Atoi(inputString)

	unsortedWordArray := make([]string, problemCase)
	for i := 0; i < problemCase; i++ {
		scanner.Scan()
		compareText := string(scanner.Text())
		compareEqual := false
		for _, element := range unsortedWordArray {
			if element == compareText {
				compareEqual = true
			}
		}
		if !compareEqual {
			unsortedWordArray[i] = compareText
		}
	}
	sort.Slice(unsortedWordArray, func(i, j int) bool {
		if len(unsortedWordArray[i]) == len(unsortedWordArray[j]) {
			return unsortedWordArray[i] < unsortedWordArray[j]
		}
		return len(unsortedWordArray[i]) < len(unsortedWordArray[j])
	})
	for i := range unsortedWordArray {
		fmt.Println(unsortedWordArray[i])
	}
}
