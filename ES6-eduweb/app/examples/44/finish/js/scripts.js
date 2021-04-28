let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak"
};

let s = new Set([person1, person2]);

// s.add("Piotr");
// s.add("Anna");
// s.add("Piotr");

// s.delete("Piotr");

// console.log( s.has("Anna") );

// s.clear();

// console.log( s.has("Anna") );

// console.log( s.has(person1) );

// s.forEach(value => console.log(value));

// for(let value of s) {
//     console.log(value);
// }

let numbers = [1, 2, 1, 0, 3, 5, 1];

function removeDuplicates(arr) {
    return [...(new Set(arr))];
}

console.log( removeDuplicates(numbers) );