-module(person_example).
-export([main/0, greet/1, calculate_year_of_birth/2]).

-record(person, {name, age}).

greet(#person{name = Name, age = Age}) ->
  io:format("Hello, my name is ~s and I am ~p years old.~n", [Name, Age]).

calculate_year_of_birth(CurrentYear, Age) ->
  CurrentYear - Age.

main() ->
  CurrentYear = calendar:local_time(),
  {Year, _, _} = CurrentYear,
  Name = "Alice",
  Age = 30,
  Person = #person{name = Name, age = Age},
  greet(Person),
  YearOfBirth = calculate_year_of_birth(Year, Age),
  io:format("~s was born in ~p.~n", [Name, YearOfBirth]).
