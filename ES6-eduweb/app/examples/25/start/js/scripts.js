class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

const employee1 = {
    firstName: "Jan",
    lastName: "Kowalski",
    position: "programista"
};