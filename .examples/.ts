(() => {
  class Person {
    constructor(public name: string, private age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  const calculateYearOfBirth = (currentYear: number, age: number) => {
    return currentYear - age;
  }

  let currentYear = new Date().getFullYear();
  let personName: string = 'Alice';
  let personAge: number = 30;

  const person = new Person(personName, personAge);
  const yearOfBirth = calculateYearOfBirth(currentYear, personAge);

  person.greet();
  console.log(`${person.name} was born in ${yearOfBirth}.`);
})();
