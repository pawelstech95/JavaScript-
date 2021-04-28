class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return `${this.firstName} ${this.lastName}`;
    }

    static inherit(obj) {
        return Object.setPrototypeOf(obj, Person.prototype);
    }

}

const employee1 = {
    firstName: "Jan",
    lastName: "Kowalski",
    position: "programista",
    sayHello() {
        // let name = Object.getPrototypeOf(this).sayHello.call(this);

        return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}`;
    }
};

Person.inherit(employee1);

// Object.setPrototypeOf(employee1, Person.prototype);

// console.log( Person.prototype.sayHello.call(employee1) );

console.log( employee1.sayHello() );