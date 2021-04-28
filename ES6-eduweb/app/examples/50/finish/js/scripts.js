class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

}

const PersonProxy = new Proxy(Person, {

    apply(target, thisArg, argumentsList) {
        return new target(...argumentsList);
    }

});

let person = PersonProxy("Jan", "Kowalski");