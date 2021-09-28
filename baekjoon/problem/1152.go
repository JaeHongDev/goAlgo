//단어의 개수

package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	//inputs
	// inputs := make([]string, 3)
	// inputs[0] = "The Curious Case of Benjamin Button"
	// inputs[1] = "The first character is a blank"
	// inputs[2] = "The last character is a blank"

	//scanner := bufio.NewScanner(os.Stdin)

	reader := bufio.NewReader(os.Stdin)
	var inputString string
	inputString, _ = reader.ReadString('\n')

	//scanner.Scan()
	//fmt.Println(scanner.Text())

	//fmt.Println(inputStrings)

	splitSentence := strings.Split(inputString, " ")

	var count int
	for i := range splitSentence {
		if splitSentence[i] != "\n" && splitSentence[i] != "" {
			count++
		}
	}
	fmt.Println(count)
}
