package main

import "fmt"

func main() {
	//inputs
	var inputs []string
	inputs = make([]string, 2)
	inputs[0] = "WA"
	inputs[1] = "UNUCIC"

	// Scanner := bufio.NewScanner(os.Stdin)
	// Scanner.Scan()
	// inputString := Scanner.Text()
	// fmt.Println(inputString)
	wordDB := make(map[int]int)
	cnt := 0
	index := 2
	for i := 65; i < 95; i++ {
		wordDB[i] = index
		cnt++

		if cnt%3 == 0 {
			cnt = 0
			index++
		}
	}
	wordDB[96] = index - 1

	for i := 0; i < len(inputs[0]); i++ {
		inputs
	}
	fmt.Println(wordDB)
}
