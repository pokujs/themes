(() => {
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    greet(): string {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }

  const calculateYearOfBirth = (currentYear: number, age: number): number => currentYear - age;
  const currentYear = new Date().getFullYear();

  let personName: string = 'Alice';
  let personAge: number = 30;

  const person = new Person(personName, personAge);
  const yearOfBirth = calculateYearOfBirth(currentYear, personAge);

  console.log(person.greet());
  console.log(`${person.name} was born in ${yearOfBirth}.`);
})();
