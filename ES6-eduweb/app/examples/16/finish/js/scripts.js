// let numbers = [10, 20, 30, 40, 50];

// let [first, second, , ...rest] = numbers || [];

// console.log(first, second, rest);

let numbers = [10];

let [first, second = 2] = numbers || [];

// console.log(first, second);

let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49
};

let { firstName, lastName, job: position = "Programista" } = person || {};

console.log(firstName, lastName, position);