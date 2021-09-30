package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	//inputs
	// var inputs []string
	// inputs = make([]string, 2)
	// inputs[0] = "WA"
	// inputs[1] = "UNUCIC"

	Scanner := bufio.NewScanner(os.Stdin)
	Scanner.Scan()
	inputString := Scanner.Text()
	//fmt.Println(inputString)

	inputCase := inputString

	wordDB := make(map[int]int)
	wordDB[65] = 3
	wordDB[66] = 3
	wordDB[67] = 3

	wordDB[68] = 4
	wordDB[69] = 4
	wordDB[70] = 4

	wordDB[71] = 5
	wordDB[72] = 5
	wordDB[73] = 5

	wordDB[74] = 6
	wordDB[75] = 6
	wordDB[76] = 6

	wordDB[77] = 7
	wordDB[78] = 7
	wordDB[79] = 7

	wordDB[80] = 8
	wordDB[81] = 8
	wordDB[82] = 8
	wordDB[83] = 8

	wordDB[84] = 9
	wordDB[85] = 9
	wordDB[86] = 9

	wordDB[87] = 10
	wordDB[88] = 10
	wordDB[89] = 10
	wordDB[90] = 10

	// wordDB[92] = 3
	// wordDB[93] = 3
	// wordDB[94] = 3
	// wordDB[95] = 3
	// wordDB[] = 3
	// wordDB[96] = index - 1
	// wordDB[49] = 1
	answer := 0
	for i := 0; i < len(inputCase); i++ {
		//fmt.Println(inputCase[i])
		//fmt.Println(reflect.TypeOf(inputCase[i]))
		answer += wordDB[int(inputCase[i])]
	}

	// for key, value := range wordDB {
	// 	fmt.Printf("%c %d \n", key, value)
	// }
	fmt.Println(answer)
}
