// package main

// import "fmt"

// func main() {
// 	fmt.Println("Hello, World!")
// }

package main

import (
	"fmt"

	"example.com/greetings"
)

func main() {
	// Get a greeting message and print it.
	message := greetings.Hello("Gladys")
	fmt.Println(message)
}

// now:   go build   which should build the app but is currently being blocked by BitDefender.. :(
