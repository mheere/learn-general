package main

import (
	"fmt"

	"rsc.io/quote"
)

func main() {
	fmt.Println(quote.Hello())
	fmt.Println(quote.Go())
	fmt.Println(quote.Glass())
}

// now first run:       go mod init hello
// then run this with:     go run quote.go
