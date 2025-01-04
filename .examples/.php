<?php

namespace Blog;
use PDO;

class Person {
  private string $name;
  private int $age;
  static int $test;

  public function __construct(string $name, int $age) {
    $this->name = $name;
    $this->age = $age;
    self::test;
  }

  public function greet(): string {
    return "Hello, my name is {$this->name} and I am {$this->age} years old.";
  }
}

function calculateYearOfBirth(int $currentYear, int $age): int {
  return $currentYear - $age;
}

$currentYear = (int) date("Y");
$person = new Person('Alice', 30);
$yearOfBirth = calculateYearOfBirth($currentYear, $personAge);

echo $person->greet();

?>
