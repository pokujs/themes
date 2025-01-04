defmodule Person do
  defstruct [:name, :age]

  def greet(%Person{name: name, age: age}) do
    "Hello, my name is #{name} and I am #{age} years old."
  end
end

defmodule Main do
  def calculate_year_of_birth(current_year, age) do
    current_year - age
  end

  def run do
    current_year = :calendar.local_time() |> elem(0) |> elem(0)
    person_name = "Alice"
    person_age = 30
    person = %Person{name: person_name, age: person_age}
    year_of_birth = calculate_year_of_birth(current_year, person_age)

    IO.puts(Person.greet(person))
    IO.puts("#{person_name} was born in #{year_of_birth}.")
  end
end

Main.run()
