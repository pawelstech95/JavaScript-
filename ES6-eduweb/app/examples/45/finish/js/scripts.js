// let person1 = {
//     firstName: "Jan",
//     lastName: "Kowalski"
// };

// let person2 = {
//     firstName: "Anna",
//     lastName: "Nowak"
// };

// let person3 = person1;

// let s = new WeakSet();

// s.add(person1);
// s.add(person2);

// person1 = null;

// console.log( s.has(person3) );

// person3 = null;

const people = new WeakSet();

class Person {
    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;

        people.add(this);

    }

    sayHello() {

        if ( !people.has(this) ) {
            throw new TypeError("Person.prototype.sayHello wywołana na niekompatybilnym obiekcie");
        }

        return `${this.firstName} ${this.lastName}`;

    }
}

let person4 = new Person("Jan", "Kowalski");

console.log( person4.sayHello() );

person4 = null;

let person5 = {
    firstName: "Anna",
    lastName: "Nowak"
};

console.log( Person.prototype.sayHello.call(person5) );