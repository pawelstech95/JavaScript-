//symbole
// typ prymitywny tj, number string etc
// symbol zrtóci cos unikalnego
// wartosc, nie wiemy jaka ale na pewno jest unikalna
// metoda prywatna
// tylko klasa Person ma dostep do tej stalej
// bo jest zdefiniowana w tym samym zakresie

const hidden = Symbol('ściśle tajne');

let person = {
  // nie bedzie widoczny przy np petli for in
  [hidden]: '12312asdf*=9asdf#a12', // [hiden] - wartosc zmienna(podstawiamy symbol)
};
// for(let key in person){
//     console.log(key) --> nic nie zwroci
// }

// console.log(person[hidden]);

const FORMAT = Symbol('format()');

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return this[FORMAT](`${this.firstName} ${this.lastName}`);
  }

  [FORMAT](text) {
    return text.toUpperCase();
  }
}

let person1 = new Person('Jan', 'Kowalski');

console.log(person1.sayHello());
