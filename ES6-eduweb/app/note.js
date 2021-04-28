//                  ----->                   let i const
//
//
// zmienne tworzone za pomocą let nie są wynoszone na gore tj var
// nie dziala zjawisko hoistingu

//                   ----->                     literały
//  -literałem  obiektu jest obiekt {}
//           tablicy []

// consise methods - skrócenie metody
// syntactic sugar - dostajemy cos co zapisujemy inaczej ale działa tak samo

let firstName = 'Jan',
  lastName = 'Kowalski';

let fnName = 'getFullName';

let person = {
  firstName,
  lastName,
  [fnName + '1']: 'Witaj', // w consoli person.getFullName1 zwróci 'Witaj'
  [fnName]() {
    // consise method - skrócone metody
    return this.firstName + ' ' + this.lastName;
  },
};

person[fnName] = function () {
  return this.firstName + ' ' + this.lastName;
};

console.log(person.getFullName());

// wewnątrz literału obiektu {}, [] możemy tworzyć właściwośli
// dynamiczne tworzenie za pomocą [fnName]
// https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Grammar_and_types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?fbclid=IwAR3Ecu2F8OAKfVWGEuz5ni4-egyOd25oowiBfre8drnV_LjE4GCsH7yAWcw

//              ----->                      Object

//setPrototypeOf
// person jest naszym konstruktorem(klasa)
function Person(firstName, lastName) {
  this.firstName = firstName; // this.firstName odnosi sie do prototypu sayhello
  this.lastName = lastName;
}
Person.prototype.sayHello = function () {
  return this.firstName + ' ' + this.lastName;
};

let person1 = new Person('jan', 'kowalski');
let person2 = new Person('anna', 'nowak');

let methods = {
  sayHello: function () {
    return (this.firstName + ' ' + this.lastName).toUpperCase();
  },
};
Object.setPrototypeOf(person1, methods);

console.log(person1.sayHello());
console.log(person2.sayHello());

// Object.setPrototypeOf(person1, methods);
// ustalamy nowy prototyp dla konkretnej funkcji
// klasa Preson dziala na wszystkie new Person chyba ze nadpiszemy
// tak jak powyzej

//           ----->                                 Object.assign()
function slider(config) {
  // slider obrazow

  let defaults = {
    speed: 500,
    pause: 3000,
    easing: 'linear',
  };

  const options = Object.assign({}, defaults, config);
  // https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  // {} -
  // defaults -
  // config -
  // od prawej strony config nadpisze defaults (nie nadpisze speed bo nie ma w config)
  // i przypisujemy to do pustego obiektu
  // dzieki Object.assign() mozemy laczyc wiele obiektow
  //
  // WAZNE
  // wart. primitywne sa kopiowane a obiekty - kopiujemy referencje

  console.log(options.fn === config.fn);
}

slider({
  easing: 'ease-in-out',
  pause: 1000,
  fn() {}, // to bedzie zawsze dokladnie ta sama funkcja(zobacz console.log)
});

console.log('Object.is({}, {})'); // Object.is() - dziala tak jak operator ===
console.log(Object.is({}, {}));

console.log('Object.is(22, 22)');
console.log(Object.is(22, 22));

console.log('Object.is(-0, +0)');
console.log(Object.is(-0, +0));

console.log('Object.is(NaN, NaN)');
console.log(Object.is(NaN, NaN));

//     ----->                     Arrow Function