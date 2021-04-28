var arr1 = new Array(10);
let arr2 = Array.of(10);

console.log(arr1);
console.log(arr2);

let lis = Array.from( document.querySelectorAll(".edu-content ul li") );

console.log(lis);

let numbers = [1, 2, 3, 4, 5];

numbers.fill(1, 2, 4);

console.log(numbers);

let names = ["Piotr", "Anna", "Jan", "Katarzyna"];

let women = names.find(value => value.endsWith("a"));

console.log(women);

let womenIndex = names.findIndex(value => value.endsWith("a"));

console.log(womenIndex);

console.log(names);

names.copyWithin(0, 1, 3);

console.log(names);