// function *it() {

//     // yield 1;
//     // yield 2;
//     // yield 3;

//     for(let i = 1; i <= 50; i++) {
//         yield i;
//     }

// }

// let iterator = it();

let it = {
    *[Symbol.iterator]() {

        let numbers = [1, 2, 3, 4, 5];

        for(let number of numbers) {
            yield number;
        }

    }
};

// console.log( iterator.next() );
// console.log( iterator.next() );
// console.log( iterator.next() );
// console.log( iterator.next() );

// for(let value of it) {
//     console.log(value);
// }

function *range(from, to) {

    let i = from;

    while(i <= to) {
        yield i++;
    }

}

for(let value of range(2, 13)) {
    console.log(value);
}