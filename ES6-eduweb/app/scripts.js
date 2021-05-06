//ES6
let it = {
  [Symbol.iterator]() {
    let numbers = [1, 2, 3, 4, 5],
      index = 0;
    return {
      next: function () {
        return {
          done: index === numbers.length ? true : false,
          value: numbers[index++],
        };
      },
    };
  },
};

let iterator = it[Symbol.iterator]();

for (let value of it) {
  console.log(value);
}
for (let ch of 'Paweł') {
  console.log(ch);
}
var lis = document.querySelectorAll('.app ul li');
for (let li of lis) {
  li.style.color = '#ff0000';
}
