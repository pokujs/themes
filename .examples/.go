package main

import "fmt"

type Person struct {
  Name string
  Age  int
}

func (p Person) Greet() string {
  return fmt.Sprintf("Hello, my name is %s and I am %d years old.", p.Name, p.Age)
}

func calculateYearOfBirth(currentYear, age int) int {
  return currentYear - age
}

func main() {
  currentYear := 2023
  personName := "Alice"
  personAge := 30

  person := Person{Name: personName, Age: personAge}
  yearOfBirth := calculateYearOfBirth(currentYear, personAge)

  fmt.Println(person.Greet())
  fmt.Printf("%s was born in %d.\n", person.Name, yearOfBirth)
}
