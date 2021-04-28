// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };

// function Employee(firstName, lastName, position) {
//     Person.call(this, firstName, lastName);
//     this.position = position;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sayHello = function() {
//     var name = Person.prototype.sayHello.call(this);

//     return "Nazywam się " + name + " i pracuję jako " + this.position + ".";
// };

// var employee1 = new Employee("Jan", "Kowalski", "programista");

// console.log( employee1.sayHello() );

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

class Employee extends Person {

    // constructor(...args) {
    //     super(...args);
    // }

    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }

    sayHello() {
        return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`;
    }

}

let employee1 = new Employee("Jan", "Kowalski", "programista");