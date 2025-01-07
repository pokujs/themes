import React from 'react';

class Person {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

export const App: React.FC<{ name: string }> = ({ name }) => {
  const person = new Person(name, 30);

  return (
    <div className='hi'>
      Plan Text
      <p>{person.greet()}</p>
    </div>
  );
};
