// let person = {
//     firstName: "Jan",
//     lastName: "Kowalski",
//     sayHello: () => {
//         return this.firstName + " " + this.lastName;
//     }
// };

// let person = {
//     firstName: "Jan",
//     lastName: "Kowalski",
//     sayHello: function() {

//         setTimeout(() => {
//             console.log(this.firstName + " " + this.lastName);
//         }, 2000);

//     }
// };

let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello: () => {
        return this.firstName + " " + this.lastName;
    }
};

console.log( person.sayHello.call({firstName: "Anna", lastName: "Nowak"}) );

document.querySelector("#button-07").onclick = (e) => console.log(e.target === this);

let Person = (firstName) => {
    this.firstName = firstName;
};

console.log(Person.prototype);

let person1 = new Person("Anna");