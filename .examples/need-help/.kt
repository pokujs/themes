class Person(val name: String, val age: Int) {
    fun greet(): String {
        return "Hello, my name is $name and I am $age years old."
    }
}

fun main() {
    val currentYear = 2023
    val personName = "Alice"
    val personAge = 30

    val person = Person(personName, personAge)
    val yearOfBirth = currentYear - personAge

    println(person.greet())
    println("${person.name} was born in $yearOfBirth.")
}
