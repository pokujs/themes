import React from 'react';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export const App = ({ name }) => {
  const person = new Person(name, 30);

  return (
    <div className='hi'>
      <p>{person.greet()}</p>
    </div>
  );
};
