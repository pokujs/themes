class Person {
  String name;
  int age;

  Person(this.name, this.age);

  String greet() {
    return "Hello, my name is $name and I am $age years old.";
  }
}

void main() {
  int currentYear = DateTime.now().year;
  String personName = "Alice";
  int personAge = 30;

  Person person = Person(personName, personAge);
  int yearOfBirth = currentYear - personAge;

  print(person.greet());
  print("${person.name} was born in $yearOfBirth.");
}
