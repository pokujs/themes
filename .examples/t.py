class Person:
  def __init__(self, name: str, age: int):
    self.name = name
    self.age = age

  def greet(self) -> str:
    return f"Hello, my name is {self.name} and I am {self.age} years old."

def calculate_year_of_birth(current_year: int, age: int) -> int:
  return current_year - age

current_year = 2023
person_name = "Alice"
person_age = 30

person = Person(person_name, person_age)
year_of_birth = calculate_year_of_birth(current_year, person_age)

print(person.greet())
print(f"{person.name} was born in {year_of_birth}.")
