import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class Person {
  final String name;
  final int age;

  Person(this.name, this.age);
  String greet() => "Hello, my name is $name and I am $age years old.";
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final person = Person("Alice", 30);
    final yearOfBirth = DateTime.now().year - person.age;

    return MaterialApp(
      home: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(person.greet()),
            Text("${person.name} was born in $yearOfBirth."),
          ],
        ),
      ),
    );
  }
}
