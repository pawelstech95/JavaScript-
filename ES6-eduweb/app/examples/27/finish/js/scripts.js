const hidden = Symbol("ściśle tajne");

let person = {
    [hidden]: "12312asdf*=9asdf#a12"
};

// console.log(person[hidden]);

const FORMAT = Symbol("format()");

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

let person1 = new Person("Jan", "Kowalski");

console.log( person1.sayHello() );