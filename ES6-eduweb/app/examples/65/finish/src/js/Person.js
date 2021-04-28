function format(text) {
    return text.toUpperCase();
}

class Person {

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        return format(`${this.firstName} ${this.lastName}`);
    }

}

export default Person;