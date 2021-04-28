/*

- Symbol.hasInstance
- Symbol.toPrimitive
- Symbol.toStringTag
- Symbol.isConcatSpreadable
- Symbol.species
- Symbol.match, Symbol.replace, Symbol.search, Symbol.split
- Symbol.unscopables
- Symbol.iterator

*/

class Person {

    constructor(firstName, lastName) {

        if(new.target === Person) {
            throw new Error("Klasa Person nie może być użyta bezpośrednio.");
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

let employee1 = new Employee("Jan", "Kowalski", "programista");