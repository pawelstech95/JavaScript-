// // jezeli wywolamy funkcje  generatora i ja wywolamy
// // to zwroci ona  iterator
// // czyli iterator zawiera juz metode next()

// function* it() {
//   // yield 1 // value 1, done false / pauza
//   // yield 2 // pozwala zrobic pauze nwet na petlach
//   // yield 3
//   for (let i = 1; i <= 50; i++) {
//     yield i;
//   }
// }
// let iterator = it();
// // console.log(iterator.next())

let it = {
  *[Symbol.iterator]() {
    // symbol i genmerator - nie wymaga next i ma yield
    let numbers = [1, 2, 3, 4, 5];
    for (let number of numbers) {
      yield number;
    }
  },
};

for (let value of it) {
  console.log(value);
}
//
//
function* range(from, to) {
  let i = from;
  while (i <= to) {
    yield i++;
  }
}
for (let value of range(2, 13)) {
  console.log(value);
}
