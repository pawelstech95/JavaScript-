let person1 = {
    firstName: "Jan",
    lastName: "Kowalski"
};

let person2 = {
    firstName: "Anna",
    lastName: "Nowak"
};

let age = new Map([[person1, 32], [person2, 22]]);

age.set(person1, 100);

// age.set(person1, 32);
// age.set(person2, 22);

// console.log( age.get(person1) );

for(let value of age.values()) {
    console.log(value);
}

// let map = new Map();

// map.set("Jan", "Kowalski");
// map.set("Anna", "Nowak");

// console.log( map.get("Anna") );