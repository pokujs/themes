(() => {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  const calculateYearOfBirth = (currentYear, age) => currentYear - age;

  const currentYear = new Date().getFullYear();
  const personName = 'Alice';
  const personAge = 30;
  const person = new Person(personName, personAge);
  const yearOfBirth = calculateYearOfBirth(currentYear, personAge);

  person.greet();
  console.log(`${person.name} was born in ${yearOfBirth}.`);
})();
