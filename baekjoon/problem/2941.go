// 크로아티아 알파벳

package main

import (
	"bufio"
	"fmt"
	"os"
)

// č 	c=
// ć 	c-
// dž 	dz=
// đ 	d-
// lj 	lj
// nj 	nj
// š 	s=
// ž 	z=

func main() {

	croatiaAlpa := make(map[string]string)
	//var croatiaAlpa map[string]string

	croatiaAlpa["c="] = "č"
	croatiaAlpa["c-"] = "ć"
	croatiaAlpa["dz="] = "dž"
	croatiaAlpa["d-"] = "đ"
	croatiaAlpa["lj"] = "lj"
	croatiaAlpa["nj"] = "nj"
	croatiaAlpa["s="] = "š"
	croatiaAlpa["z="] = "ž"

	scanner := bufio.NewScanner(os.Stdin)
	scanner.Scan()
	solution(scanner.Text(), croatiaAlpa)
	//var cases [5]string
	// cases := [5]string{"ljes=njak", "ddz=z=", "nljj", "c=c=", "dz=ak"}

	// for i := 0; i < len(cases); i++ {
	// 	fmt.Printf("case%d: input: %s ", i, cases[i])
	// 	solution(cases[i], croatiaAlpa)
	// }
}

func solution(inputWord string, db map[string]string) {
	//fmt.Println(inputWord)
	answer := 0
	combineWord := ""
	for i := 0; i < len(inputWord); i++ {
		//string(inputWord[i])
		combineWord += string(inputWord[i])
		if db[combineWord] != "" {
			//  결합된 단어가 크로아티아에 있는 경우
			//fmt.Printf(" find %s ", db[combineWord])
			answer++
			combineWord = ""
		}

		if len(combineWord) == 3 { // 길이가 3여도 존재하는 단어가 없는 경우

			combineWord = string(combineWord[1]) + string(combineWord[2])
			answer += 1
			if db[combineWord] != "" {
				//fmt.Printf(" find %s ", db[combineWord])
				answer++
				combineWord = ""
			}
		}
	}

	//fmt.Printf(" last %s %d ", combineWord, len(combineWord))
	answer += len(combineWord)
	fmt.Println(answer)
}
