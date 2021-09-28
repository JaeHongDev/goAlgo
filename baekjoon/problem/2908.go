package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func reverse(text string) string {
	returnText := ""
	size := len(text)
	for i := size - 1; i >= 0; i-- {
		returnText += string(text[i])
	}
	return returnText
}
func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	var input []string
	input = make([]string, 2)
	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()

	input = strings.Split(scanner.Text(), " ")

	a, _ := strconv.Atoi(reverse(input[0]))
	b, _ := strconv.Atoi(reverse(input[1]))
	fmt.Println(max(a, b))
}
