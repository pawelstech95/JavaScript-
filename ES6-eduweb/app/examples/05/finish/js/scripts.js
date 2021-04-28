function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello = function() {
    return this.firstName + " " + this.lastName;
};

let person1 = new Person("Jan", "Kowalski");
let person2 = new Person("Anna", "Nowak");

let methods = {
    sayHello: function() {
        return (this.firstName + " " + this.lastName).toUpperCase();
    }
};

Object.setPrototypeOf(person1, methods);

console.log(person1.sayHello());
console.log(person2.sayHello());

function slider(config) {

    let defaults = {
        speed: 500,
        pause: 3000,
        easing: "linear"
    };

    const options = Object.assign({}, defaults, config);

    console.log(options.fn === config.fn);

}

slider({
    easing: "ease-in-out",
    pause: 1000,
    fn() {

    }
});

console.log("Object.is({}, {})");
console.log( Object.is({}, {}) );

console.log("Object.is(22, 22)");
console.log( Object.is(22, 22) );

console.log("Object.is(-0, +0)");
console.log( Object.is(-0, +0) );

console.log("Object.is(NaN, NaN)");
console.log( Object.is(NaN, NaN) );