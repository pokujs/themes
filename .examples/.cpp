#include <iostream>
#include <string>

class Person {
  public:
    Person(const std::string& name, int age) : name(name), age(age) {}

  std::string greet() const {
    return "Hello, my name is " + name + " and I am " + std::to_string(age) + " years old.";
  }

  private:
    std::string name;
    int age;
};

int main() {
  int currentYear = 2023;
  int personAge = 30;
  std::string personName = "Alice";

  Person person(personName, personAge);

  std::cout << person.greet() << std::endl;

  return 0;
}
