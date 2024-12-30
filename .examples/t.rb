class Person
  attr_reader :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def greet
    "Hello, my name is #{@name} and I am #{@age} years old."
  end
end

def calculate_year_of_birth(current_year, age)
  current_year - age
end

person_name = 'Alice'
current_year = 2023
person_age = 30
person = Person.new(person_name, person_age)
year_of_birth = calculate_year_of_birth(current_year, person_age)

puts person.greet
puts "#{person.name} was born in #{year_of_birth}."
