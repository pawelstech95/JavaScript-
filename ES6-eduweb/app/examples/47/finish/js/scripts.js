let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak"
};

let age = new WeakMap([[person1, 32], [person2, 22]]);

person1 = null;

const Person = (function() {

    const privateData = new WeakMap();

    return class Person {

        constructor(firstName, lastName) {
            privateData.set(this, {
                firstName,
                lastName
            });
        }

        sayHello() {
            let data = privateData.get(this);

            return `${data.firstName} ${data.lastName}`;
        }

    };

})();


let person3 = new Person("Jan", "Kowalski");

console.log(person3.firstName);

console.log( person3.sayHello() );

person3 = null;