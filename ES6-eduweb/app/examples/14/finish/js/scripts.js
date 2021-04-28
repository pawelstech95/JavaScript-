let numbers = [10, 20, 30, 40, 50];

// let first = numbers[0],
//     second = numbers[1];

let first, second, fourth;

[first, second, , fourth] = numbers || [];

console.log(first, second, fourth);

let a = 1,
    b = 2;

console.log(a, b);

// let temp = a;

// a = b;
// b = temp;

[a, b] = [b, a];

console.log(a, b);