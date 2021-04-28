let numbers = [12, 3, 9, 22, 11, 6];

// console.log( Math.max.apply(Math, numbers) );
console.log( Math.max(...numbers) );

let numbers2 = [2, 33, 10, ...numbers, 1, 75];

console.log( [...numbers2, ...numbers, 100] );

function strToArray(string = "") {
    return [...string];
}

console.log( strToArray() );