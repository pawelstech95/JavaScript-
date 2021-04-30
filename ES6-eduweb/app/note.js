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

function getArgs() {
  let args = () => {
    // zeby funkcja strzałkowa miala dostep do wlaściwosci
    console.log(arguments); // arguments musimy ja opleść w inna funkcje
  }; // tylko ze to sa argumenty etArgs
  args();
}

getArgs(1, 2, 3);
//
//
let person = {
  firstName: 'Jan',
  lastName: 'Kowalski',

  sayHello: () => {
    // kontekst window
    this.firstName + ' ' + this.lastName;
  },
};

// setTimeout tez kieruje na obiekt globalny
document.querySelector('#button-07').onclick = (e) =>
  console.log(e.target === this); // false
// podczas przypisywania zdarzen e.target za pomoca arrow function
// to this nie odwoła się do np. przycisku (onClick)

let Person = (firstName) => {
  this.firstName = firstName;
};

console.log(Person.prototype);

let person1 = new Person('Anna');
// arrow function nie moze być konstruktorem(problem z this)
// nie mają też prototypu

//

function multiply(number, multiplyBy = 2) {
  // multiplyBy = multiplyBy || 2;
  // multiplyBy = multiplyBy === undefined ? 2 : multiplyBy;

  return number * multiplyBy;
}

//  --------->        lazy evaluation
// getCountryInfo(countryInfo = getCountryCode('Polska'))
// jezeli podamy country info tj w pierwszej funkcji
//to nie ma sensu przechodzic do getCountryCode('Polska')

function getCountryCode(country, code = country.toUpperCase().slice(0, 3)) {
  // jako code mozemy przypisac poprzednia wartosc czyli country
  console.log('Wykonuję funkcję getCountryCode');

  return {
    country,
    code,
  };
}

function getCountryInfo(countryInfo = getCountryCode('Polska')) {
  return (
    'Państwo to ' + countryInfo.country + ', a jego kod to ' + countryInfo.code
  );
}

//  Domyślne parametry i zmienna arguments

function multiplyBy(x, n = x) {
  console.log(arguments.length);

  arguments[1] = 10;

  return x * n;
}

//domyślne  parametry nie liczą sie w index??
// domyślny nie jest brany pod uwage

// ---------------->        Nazwa funkcji i debugowanie
// w consoli getName.name mamy dostęp do nazwy funkcji
//  dzieki name mamy np info pofczas wyrzucenia bledu
// gdzie jest błąd np.
//      index.js:7 Uncaught Error: Wystąpił błąd
//          at getName (index.js:7)  // stack trace - stos wywołań
//          at <anonymous>:1:1
//          getName @ index.js:7
//          (anonymous) @ VM8692:1
//
function getName() {
  throw new Error('Wystąpił błąd');
  return 'jan';
}
let getName = function () {
  // funkcja anonimowa nie ma dostepu do name ale
  throw new Error('Wystąpił błąd'); // dzieki deklaracji let getName js juz daje nam dostęp do name
  return 'jan';
};
let newFn = getName.bind(null); // newFn.name = 'bound getName'
//
//
// -------------->   Rest
//
// es5
function calculate(type) {
  // console.log(arguments); // pseudo tablica - nie jest tablica wiec nie posiada np metody slice
  let args = [].slice.call(arguments, 1); // nowa tabloca z metoda slice, i call - wywoluje nam fnc(this=arguments)
  console.log(args); //zwraca tablice

  return args.reduce(
    (prevVal, val) => prevVal + val // 2+22=24+222 etc
  );
}
console.log(calculate('sum', 2, 22, 222, 2222, 222222));
// ...rest
function calculate(type, ...args) {
  console.log(args);
  return args.reduce(
    (prevVal, val) => prevVal + val // 2+22=24+222 etc
  );
}
console.log(calculate('sum', 2, 22, 222, 2222, 222222));
// 3 przyklad

function calculate(type, ...args) {
  console.log(args);
  let calculations = {
    sum: (prevVal, val) => prevVal + val,
    multiply: (prevVal, val) => prevVal * val,
  };
  return args.reduce(calculations[type]);
}
console.log(calculate('sum', 2, 22, 222, 2222, 222222));
console.log(calculate('multiply', 2, 22, 222, 2222, 222222));


// --------------->        ...spread

let numbers = [12, 3, 9, 22, 11, 6];

// console.log( Math.max.apply(Math, numbers) ); // this=math, parametr=number
console.log(Math.max(...numbers));
// rest zwraca reszte
// spreed rozbija nam tablice
let numbers2 = [2, 33, 10, ...numbers, 1, 75];

console.log([...numbers2, ...numbers, 100]);//nowa tablica

function strToArray(string = '') {
  return [...string];
}


console.log(strToArray());


// -------->      destructering
// objects
//
function getSth() {
  return {}; // nie mozemy podac null
} // nie mozna zrobic destrukturyzacji na null or undefined

let { x: xNew, y: y, z } = getSth() || {}; // zawsze musi byc cos wtedy x,y,z = undefined
 
// zmienne moga byc tworzone wczesniej
// let fName, lastName;
//({firstName: fname, lastName} = person) // musimy pamiętać o ()
//
// array
[a,b] = [b,a]

