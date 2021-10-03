// 그룹 단어 체커

// ccazzzbb c a z b

package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {

	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()

	size, _ := strconv.Atoi(scanner.Text())

	input := make([]string, size)

	for i := 0; i < size; i++ {
		scanner.Scan()
		input[i] = scanner.Text()
	}
	solution(size, input)
}

func solution(size int, inputs []string) {
	count := 0
	for i := 0; i < size; i++ {
		// loop word
		groupWord := inputs[i]
		checkedHashTable := make(map[byte]bool)

		wordSize := len(groupWord)
		selected := groupWord[0]
		answer := true
		for j := 1; j < wordSize; j++ {
			if checkedHashTable[selected] {
				answer = false
			}
			if selected != groupWord[j] {
				checkedHashTable[selected] = true
				selected = groupWord[j]

				if j == wordSize-1 && checkedHashTable[selected] {
					answer = false

				}
			}
		}

		if answer {
			count++
		}
	}
	fmt.Println(count)

}
