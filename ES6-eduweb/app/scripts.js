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

