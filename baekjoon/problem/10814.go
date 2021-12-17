package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
	"strings"
	"time"
)

type Member struct {
	age      int
	name     string
	sequence int
}

func main() {
	startTime := time.Now()

	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	inputTextCase := scanner.Text()
	inputIntCase, _ := strconv.Atoi(inputTextCase)
	unSortedMembers := make([]Member, inputIntCase)

	for i := 0; i < inputIntCase; i++ {
		scanner.Scan()
		inputText := scanner.Text()

		inputTextArray := strings.Split(inputText, " ")

		age, _ := strconv.Atoi(inputTextArray[0])
		name := string(inputTextArray[1])
		unSortedMembers[i] = Member{age: age, name: name, sequence: i}
	}
	sort.Slice(unSortedMembers, func(a, b int) bool {
		if unSortedMembers[a].age == unSortedMembers[b].age {
			return unSortedMembers[a].sequence < unSortedMembers[b].sequence
		}
		if unSortedMembers[a].age < unSortedMembers[b].age {
			return true
		}
		return false
	})

	// for _,member := range unSortedMembers {
	// 	fmt.Printf("%d %s\n", member.age, member.name)

	// }
	elapsedTime := time.Since(startTime)

	fmt.Printf("실행시간: %s\n", elapsedTime)
}
