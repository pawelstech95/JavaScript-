// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Object.defineProperty(Person.prototype, "sayHello", {
//     enumerable: false,
//     value: function() {
//         return this.firstName + " " + this.lastName;
//     }
// });

// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };

class Person {

    constructor(firstName, lastName) {
        if(new.target === Person) {
            throw new Error("Klasy Person nie można używać bezpośrednio.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

class Employee extends Person {

    constructor(firstName, lastName, position) {
        super(firstName, lastName);
        this.position = position;
    }

    sayHello() {
        return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`;
    }

}

// var person1 = new Person("Jan", "Kowalski");
var employee1 = new Employee("Jan", "Kowalski", "programista");

// let person1 = new Person("Jan", "Kowalski");

// for(let key in person1) {
//     console.log(key);
// }

function createInstance(fromClass, ...args) {
    return new fromClass(...args);
}

let person2 = createInstance(class {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}, "Anna", "Nowak");