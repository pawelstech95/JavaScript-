// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

var person1 = new Person("Jan", "Kowalski");

console.log( person1.sayHello() );