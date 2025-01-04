public class Main {
  public static void main(String[] args) {
    class Person {
      String name;
      int age;

      Person(String name, int age) {
        this.name = name;
        this.age = age;
      }

      String greet() {
        return "Hello, my name is " + name + " and I am " + age + " years old.";
      }
    }

    int currentYear = java.time.Year.now().getValue();
    String personName = "Alice";
    int personAge = 30;

    Person person = new Person(personName, personAge);
    int yearOfBirth = currentYear - personAge;

    System.out.println(person.greet());
    System.out.println(person.name + " was born in " + yearOfBirth + ".");
  }
}
