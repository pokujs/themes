#include <stdio.h>
#include <string.h>

typedef struct {
  char name[50];
  int age;
} Person;

void greet(Person *p, char *output) {
  sprintf(output, "Hello, my name is %s and I am %d years old.", p->name, p->age);
}

int calculate_year_of_birth(int current_year, int age) {
  return current_year - age;
}

int main() {
  char personName[] = "Alice";
  int personAge = 30;
  int currentYear = 2023;

  Person person;
  strcpy(person.name, personName);
  person.age = personAge;

  char greeting[100];
  greet(&person, greeting);

  int yearOfBirth = calculate_year_of_birth(currentYear, person.age);

  printf("%s\n", greeting);
  printf("%s was born in %d.\n", person.name, yearOfBirth);

  return 0;
}
