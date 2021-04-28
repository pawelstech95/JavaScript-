class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

let person1 = new Person("Jan", "Kowalski");

let json = `{
    "fName": "Anna",
    "lName": "Kowalska"
}`;