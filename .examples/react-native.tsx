import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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

export const App: React.FC<{ name: string }> = ({ name }) => {
  const person = new Person(name, 30);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{person.greet()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, color: '#333' },
});
