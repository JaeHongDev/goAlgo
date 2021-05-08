package main

import fmt "fmt"

type Stack []interface{}

func (s *Stack) IsEmpty() bool {
	return false
}

func main() {
	var s Stack
	fmt.Println(s)

}
