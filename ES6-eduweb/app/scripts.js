// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };

class Person {
  // funkcje sa hoistowane a klasy NIE
  // musimy dodac klase wyzej
  // klasy nie sa tez dodawane jako elem, obiektu window
  //
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }
}

var person1 = new Person('Jan', 'Kowalski');

console.log(person1.sayHello());
