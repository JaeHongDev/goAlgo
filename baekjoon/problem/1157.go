package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	reader := bufio.NewReader(os.Stdin)
	var inputStrings string
	fmt.Fscanln(reader, &inputStrings)

	inputStrings = strings.ToUpper(inputStrings)
	hashTable := insertWords(inputStrings)

	dupulicated := false
	var index byte
	answer := 0
	for key, value := range hashTable {
		if value == answer {
			dupulicated = true
		}
		if value > answer {
			index = key
			answer = value
			dupulicated = false
		}
	}
	if dupulicated {
		fmt.Println("?")
		return
	}
	fmt.Printf("%c", index)
}

func insertWords(words string) map[byte]int {
	hashTable := make(map[byte]int)
	for i := 0; i < len(words); i++ {
		hashTable[words[i]]++
	}
	return hashTable
}
