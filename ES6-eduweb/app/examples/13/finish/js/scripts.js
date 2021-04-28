let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49
};

// let firstName = person.firstName,
//     lastName = person.lastName,
//     age = person.age;

function getData() {
    return null;
}

let fName, lastName, age;

({ firstName: fName, lastName, age } = person);

// let { firstName: fName, lastName, age } = person;

console.log(fName, lastName, age);