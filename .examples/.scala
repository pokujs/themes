class Person(val name: String, private val age: Int) {
  def greet(): String = s"Hello, my name is $name and I am $age years old."
}

object Main extends App {
  def calculateYearOfBirth(currentYear: Int, age: Int): Int = currentYear - age

  val currentYear = java.time.Year.now.getValue
  val personName = "Alice"
  val personAge = 30
  val person = new Person(personName, personAge)
  val yearOfBirth = calculateYearOfBirth(currentYear, personAge)

  println(person.greet())
  println(s"${person.name} was born in $yearOfBirth.")
}
