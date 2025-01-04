struct Person {
  name: String,
  age: u32,
}

impl Person {
  fn new(name: &str, age: u32) -> Self {
    Self {
      name: name.to_string(),
      age,
    }
  }

  fn greet(&self) -> String {
    format!("Hello, my name is {} and I am {} years old.", self.name, self.age)
  }
}

fn main() {
  let current_year = 2023;
  let person_name = "Alice";
  let person_age = 30;
  let year_of_birth = current_year - person_age;
  let person = Person::new(person_name, person_age);

  println!("{}", person.greet());
  println!("{} was born in {}.", person.name, year_of_birth);
}
