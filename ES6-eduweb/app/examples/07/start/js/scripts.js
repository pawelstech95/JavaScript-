let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello: () => {
        return this.firstName + " " + this.lastName;
    }
};