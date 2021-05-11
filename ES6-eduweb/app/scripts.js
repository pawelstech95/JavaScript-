let arr1 = new Array(10); // 10x undefined
let arr2 = Array.of(10); // 10

let lis = Array.from(document.querySelectorAll('.div ul li'));
console.log(lis);
let numbers = [ 1,2,3,4,5]
numbers.fill(1, ) // wypelnic cala tablice 1,1,1,1,1
console.log(numbers)
numbers.fill(1,2,4) // wypełnij 1 zacznij od index 2uzupełniaj do index 4

let names = ["Piotr", "Anna", "Jan", "Katarzyna"];

let women = names.find(value => value.endsWith("a"));

console.log(women);

let womenIndex = names.findIndex(value => value.endsWith("a"));

console.log(womenIndex);

console.log(names);

names.copyWithin(0, 1, 3);

console.log(names);