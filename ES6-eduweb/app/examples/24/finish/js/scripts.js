class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

    static create({ fName: firstName, lName: lastName } = {}) {
        return new Person(firstName, lastName);
    }

}

let person1 = new Person("Jan", "Kowalski");

let json = `{
    "fName": "Anna",
    "lName": "Kowalska"
}`;

let person2 = Person.create( JSON.parse(json) );