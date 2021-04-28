function *getRandom() {

    while(true) {
        yield Math.floor(Math.random() * 100) + 1;
    }

}

let iterator = getRandom();
let randomNumbers = [];

for(let number of iterator) {
    randomNumbers.push(number);

    if(randomNumbers.length === 10) {
        iterator.return();
    }
}

console.log(randomNumbers);