//                  ----->                   let i const
//
//
// zmienne tworzone za pomocą let nie są wynoszone na gore tj var
// nie dziala zjawisko hoistingu
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// --------------->        ...spread

let numbers = [12, 3, 9, 22, 11, 6];

// console.log( Math.max.apply(Math, numbers) ); // this=math, parametr=number
console.log(Math.max(...numbers));
// rest zwraca reszte
// spreed rozbija nam tablice
let numbers2 = [2, 33, 10, ...numbers, 1, 75];

console.log([...numbers2, ...numbers, 100]); //nowa tablica

function strToArray(string = '') {
  return [...string];
}

console.log(strToArray());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
[a, b] = [b, a];
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// ---------->      destrukturyzacja zagnieżdżona
let {
  firstName: fname,
  age,
  job: { name: jobNeme, experiance }, // obiekt w obiekcie podczas destrukturyzacji
} = person || {};
// tworzymy wzorzec dopasowany do obiektu
// np fname = 'jan'
// name: 'programista'
favNumb: {
  list: [, second]; // w favNumb robimy destrukturyzacje zagniezdzona
} // i destrukturyzacje [1,2] = [, second]
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// --------->      20. Domyślne wartości i operator rest
//  rest = ...rest - czyli reszta z tabl numbers
//

// let numbers = [10, 20, 30, 40, 50];

// let [first, second, , ...rest] = numbers || [];

// console.log(first, second, rest);

let numbers = [10];

let [first, second = 2] = numbers || []; // bląd tylko jezeli nie ma deklaracji

// console.log(first, second);

let person = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  age: 49,
};

let { firstName, lastName, job: position = 'Programista' } = person || {};

console.log(firstName, lastName, position);

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 21. Dekompozycja parametrów funkcji
//
function setSliderSpeed({ speed, easing } = {}) {
  let slider = {};

  slider.speed = speed;
  slider.easing = easing;

  console.log(slider);
}

const config = {
  autoPlay: true,
  speed: 500,
  pause: 2000,
  easing: 'linear',
  infinite: true,
};

setSliderSpeed(config);

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 22. Template strings
//

let person = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  age: 49,
};

let { firstName, lastName, age } = person;

// let info = "Imię: " + firstName + ", nazwisko: " + lastName + ", wiek: " + age + " lat.";

let info = `Imię: ${firstName}, nazwisko: ${lastName}, wiek: ${age} lat.`;

console.log(info);

let buttonText = 'Wciśnij mnie!';

// let template = "\
// <button class='btn'>\
//     <span>" + buttonText + "</span>\
// <button>";

let template = `
<button class='btn'>
  <span>${buttonText}</span>
</button>
`;

console.log(template);

// jezeli przed `\${cos}` podamy \ to zignoruje

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 23. Funkcje tagujące
//

function formatPrice(strings, ...values) {
  let output = '';

  strings.forEach(function (string, index) {
    let value = values[index];

    output += string;

    if (value !== undefined) {
      if (typeof value === 'number') {
        output += value.toFixed(2) + ' PLN';
      } else {
        output += value;
      }
    }
  });

  return output;
}

let product = {
  name: 'Płyta DVD',
  price: 1,
};

let { name: pName, price: pPrice } = product;

let info = formatPrice`Dodałeś do koszyka produkt: ${pName} w cenie ${pPrice}.`;

console.log(info);

// Do funkcji takiej automatycznie są przekazywane w pierwszym parametrze poszczególne
//  części template string (znajdujące się między zmiennymi),
// a do kolejnych parametrów zostaną przekazane kolejne zmienne użyte wewnątrz tekstu.

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 24. nowe metody dla strings
//

const URL = 'https://mojastrona.pl';
const filePath = '/Users/janek/Desktop/app/index.html';

function isHTTPS(text) {
  // return text.indexOf("https://") === 0;
  return text.startsWith('https://');
}

function hasExt(path, ext) {
  // return (new RegExp("\." + ext + "$")).test(path);
  return path.endsWith(`.${ext}`);
}

function includes(text, substring) {
  // return text.indexOf(substring) !== -1;
  return text.includes(substring);
}

console.log(isHTTPS(URL));
console.log(hasExt(filePath, 'html'));
console.log(includes('Ala ma kota', 'ma'));
console.log('='.repeat(10));

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 25. Tworzenie klas
//
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };

class Person {
  // funkcje sa hoistowane a klasy NIE
  // musimy dodac klase wyzej
  // klasy nie sa tez dodawane jako elem, obiektu window
  //
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }
}

var person1 = new Person('Jan', 'Kowalski');

console.log(person1.sayHello());

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 26. Dziedziczenie
//
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };

// function Employee(firstName, lastName, position) {
//     Person.call(this, firstName, lastName);
//     this.position = position;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.sayHello = function() {
//     var name = Person.prototype.sayHello.call(this);

//     return "Nazywam się " + name + " i pracuję jako " + this.position + ".";
// };

// var employee1 = new Employee("Jan", "Kowalski", "programista");

// console.log( employee1.sayHello() );

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  // jezeli nie utworzymy konstruktora to js utworzy domyslny konstruktor
  //
  // constructor(...args) {
  //     super(...args);
  // }

  constructor(firstName, lastName, position) {
    super(firstName, lastName); // konstructor kl nadrzednej czyli Person constructor
    this.position = position; // jest wywolywana i this jest ustawione na nowo utworzony obiekt
  }

  sayHello() {
    return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`;
  }
}

let employee1 = new Employee('Jan', 'Kowalski', 'programista');

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 27. Dziedziczenie z wbudowanych typow
//

//collection dziedziczy z array a array nie wie nic o collection
class Collection extends Array {
  constructor(...args) {
    if (args.length === 1) {
      super(1); // wywolanie konstruktora rodzica
      this[0] = args[0]; // jezeli w collection podamy tyoko (10)
    } else {
      // to w consoli bedzie 10x undefined, dlatego dajemy warunek
      super(...args);
    }
  }
}

let col = new Collection(10, 20, 30);

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 28. Metody statyczne
//

// metody statyczne to metody ktore mozemy przypisac bezpośrednio do klasy
// są bezpośrednio przypisane do klasy,
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }

  static create({ fName: firstName, lName: lastName } = {}) {
    return new Person(firstName, lastName);
  }
}

let person1 = new Person('Jan', 'Kowalski');

let json = `{
  "fName": "Anna",
  "lName": "Kowalska"
}`;

let person2 = Person.create(JSON.parse(json));

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 29. uzycie super na obiektach
//

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }

  static inherit(obj) {
    //
    return Object.setPrototypeOf(obj, Person.prototype);
  }
}

const employee1 = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  position: 'programista',
  sayHello() {
    // let name = Object.getPrototypeOf(this).sayHello.call(this);

    return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}`;
  }, // z super() mozemy korzystac wewnatrz funkcji w obiektach
}; // tylko ze obiekt musi miec ustawiony jakis prototyp
// mozemy uzyc tylko skroconego zapisu funkcji
Person.inherit(employee1);

// Object.setPrototypeOf(employee1, Person.prototype);

// console.log( Person.prototype.sayHello.call(employee1) );

console.log(employee1.sayHello());

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 30. ciekawostki odnosnie klas
//
// wewnatrz klas zawsze korzystamy z 'strict mode'
// mozna dziedziczyc ze zwyklych funkcji, pod waruniem ze nie sa to arrow function

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Object.defineProperty(Person.prototype, "sayHello", {
//     enumerable: false,
//     value: function() {
//         return this.firstName + " " + this.lastName;
//     }
// });

// Person.prototype.sayHello = function() {
//     return this.firstName + " " + this.lastName;
// };

class Person {
  constructor(firstName, lastName) {
    if (new.target === Person) {
      throw new Error('Klasy Person nie można używać bezpośrednio.');
    }

    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employee extends Person {
  constructor(firstName, lastName, position) {
    super(firstName, lastName);
    this.position = position;
  }

  sayHello() {
    return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`;
  }
}

// var person1 = new Person("Jan", "Kowalski");
var employee1 = new Employee('Jan', 'Kowalski', 'programista');

// let person1 = new Person("Jan", "Kowalski");

// for(let key in person1) {
//     console.log(key);
// }

function createInstance(fromClass, ...args) {
  return new fromClass(...args);
}

let person2 = createInstance(
  class {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  },
  'Anna',
  'Nowak'
);
//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 31. symbole
//
//symbole
// typ prymitywny tj, number string etc
// symbol zrtóci cos unikalnego
// wartosc, nie wiemy jaka ale na pewno jest unikalna
// metoda prywatna
// tylko klasa Person ma dostep do tej stalej
// bo jest zdefiniowana w tym samym zakresie
//

const hidden = Symbol('ściśle tajne');

let person = {
  // nie bedzie widoczny przy np petli for in
  [hidden]: '12312asdf*=9asdf#a12', // [hiden] - wartosc zmienna(podstawiamy symbol)
};
// for(let key in person){
//     console.log(key) --> nic nie zwroci
// }

// console.log(person[hidden]);

const FORMAT = Symbol('format()');

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return this[FORMAT](`${this.firstName} ${this.lastName}`);
  }

  [FORMAT](text) {
    return text.toUpperCase();
  }
}

let person1 = new Person('Jan', 'Kowalski');

console.log(person1.sayHello());
//
//
//
//
//   ------------>                Metody Symboli
//
//
// Symbol.for('hidden') - jezeli nie bylo wczesniej deklaracji i oprzekarzemy string
// ('hidden') to utworzy nam Symbol w globalnym rejestrze
// kazde kolejne uzycie [Symbol.for('hidden')] bedzie nam zwracac ten symbol
//
//
//
//
//
//
//
//
//

// const hidden = Symbol("hidden");
const hidden = Symbol.for('hidden'); // dzieki temu symbol jest przechowywany w globalnym zakresie
//
let person = {
  [hidden]: '123jkasdKhasdf$901-123',
  getSecret() {
    return this[Symbol.for('hidden')];
  },
};

console.log(Symbol.keyFor(hidden));
console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 33. symbole wbudowane
//
/*

- Symbol.hasInstance - 
- Symbol.toPrimitive
- Symbol.toStringTag
- Symbol.isConcatSpreadable
- Symbol.species
- Symbol.match, Symbol.replace, Symbol.search, Symbol.split
- Symbol.unscopables
- Symbol.iterator

*/

class Person {
  constructor(firstName, lastName) {
    if (new.target === Person) {
      throw new Error('Klasa Person nie może być użyta bezpośrednio.');
    }

    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `${this.firstName} ${this.lastName}`;
  }

  static [Symbol.hasInstance](obj) {
    //  sprawdzi czy na klanie person[1*]
    return false; // czy istnieje metoda, jezeli tak to przekaze to cp jest po lewej str instanceOf
  } // bez static zostalo by dodane do prototypu i nie bd dzialac

  get [Symbol.toStringTag]() {
    // zamiast [object, object] zwroci person
    return 'Person';
  }

  [Symbol.toPrimitive]() {
    // zamiast  [object, object]
    return this.sayHello(); // zwroci sayHello()
  }
}

class Employee extends Person {
  constructor(firstName, lastName, position) {
    super(firstName, lastName);
    this.position = position;
  }

  sayHello() {
    return `Nazywam się ${super.sayHello()} i pracuję jako ${this.position}.`;
  }

  static [Symbol.hasInstance](obj) {
    return obj.constructor === Employee;
  }
}

let employee1 = new Employee('Jan', 'Kowalski', 'programista');

console.log(employee1 instanceof Person); //[1*]

console.log('Obiekt to ' + employee1);

//
//
//
//
//
//
//
//
//
//
//
//
// --------------->    Tworzenie iteratorów
//
// ES5
const it = function () {
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
};

let iterator = it();

// console.log(iterator.next());

for (let o = iterator.next(); o.done !== true; iterator.next()) {
  console.log(o);
}
//
//
//
//
//
//
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

//
//
//
//
//
//
//
//
//
//
//
//
// --------------->36. Operator spread na iteratorach
//
let numbers = [12, 3, 9, 22, 11, 6];

let it = {
  [Symbol.iterator]() {
    var numbers = [1, 2, 3, 4, 5],
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

// console.log( Math.max(...numbers) );
console.log(Math.max(...it));
console.log([...it]);
console.log([...'Paweł']);

var lis = document.querySelectorAll('.app ul li');

[...lis]
  .filter((li) => li.textContent.includes('2'))
  .forEach((li) => (li.style.fontWeight = 'bold'));

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 37. Dodawanie iteratora do klasy
//
class Model {
  constructor(data = {}) {
    this.data = data;
  }

  get(prop) {
    return this.data[prop];
  }

  set(prop, value) {
    this.data[prop] = value;
  }
}

class Collection {
  constructor(models) {
    this.models = [];

    if (Collection.hasIterator(models)) {
      this.populate(models);
    }
  }

  populate(models) {
    for (let model of models) {
      this.models.push(new Model(model));
    }
  }

  [Symbol.iterator]() {
    var models = this.models,
      index = 0;

    return {
      next: function () {
        return {
          done: index === models.length ? true : false,
          value: models[index++],
        };
      },
    };
  }

  static hasIterator(obj) {
    return obj && typeof obj[Symbol.iterator] === 'function';
  }
}

const USERS = window.USERS;

let users = new Collection(USERS);

[...users]
  .filter((user) => user.get('email').endsWith('.biz'))
  .forEach((user) =>
    user.set('email', user.get('email').replace('.biz', '.org'))
  );

for (let user of users) {
  console.log(user.get('email'));
}

//
//
//
//
//
//
//
//
//
//
//
//
// --------------->           38. Tworzenie generatorów
//
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

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 39. Przekazywanie wartośc
//
//example 1
function* it(number) {
  let result = (yield) + number * 2; // yield bez () = 10 // z ()undefined
  console.log('druga linijka');
  yield result;
}
let iterator = it(5);

console.log(iterator.next());
console.log(iterator.next(2)); // 2 wpada pod (yield)
//example 2

function ajax(url) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  return xhr;
}
function* showData(url) {
  let result = yield ajax(url);
  document.querySelector('.lesson39').textContent = result;
}

function makeRequest(url, gen) {
  let it = gen(url);

  let xhr = it.next().value;

  xhr.onload = function () {
    if (xhr.status === 200) {
      it.next(xhr.responseText);
    }
  };

  xhr.send();
}

makeRequest('http://code.eduweb.pl/kurs-es6/json/', showData);

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 40 obsługa błędów
//

function ajax(url) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url);

  return xhr;
}

function makeRequest(url, gen) {
  let it = gen(url);

  let xhr = it.next().value;

  xhr.onload = function () {
    if (xhr.status === 200) {
      it.next(xhr.responseText);
    }
  };

  xhr.onerror = function () {
    it.throw(new Error('Wystąpił błąd'));
  };

  xhr.send();
}

function* showData(url) {
  let output = document.querySelector('#pre-36');

  try {
    let result = yield ajax(url);
    output.textContent = result;
  } catch (e) {
    output.textContent = e.message;
  }
}

makeRequest('ttp://code.eduweb.pl/kurs-es6/json/', showData);

//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> zwracanie z generatora
//
function* getRandom() {
  while (true) {
    yield Math.floor(Math.random() * 100) + 1;
  }
}

let iterator = getRandom();
let randomNumbers = [];

for (let number of iterator) {
  randomNumbers.push(number);

  if (randomNumbers.length === 10) {
    iterator.return();
  }
}

console.log(randomNumbers);
//
//
//
//
//
//
//
//
//
//
//
//
// --------------->42. delegowanie generatorow
//
// function *gen() {

//     yield 1;
//     yield *[2, 3, 4]; // delegowanie - zsroc wszystko po kolei
//     yield 5;

// }

// for(let value of gen()) {
//     console.log(value);
// }

class Model {
  constructor(data = {}) {
    this.data = data;
  }

  get(prop) {
    return this.data[prop];
  }

  set(prop, value) {
    this.data[prop] = value;
  }
}

class Collection {
  constructor(models) {
    this.models = [];

    if (Collection.hasIterator(models)) {
      this.populate(models);
    }
  }

  populate(models) {
    for (let model of models) {
      this.models.push(new Model(model));
    }
  }

  static hasIterator(obj) {
    return obj && typeof obj[Symbol.iterator] === 'function';
  }

  *[Symbol.iterator]() {
    yield* this.models; // delegowanie, musi przeleciec wszystko w srodku
  }
}

const USERS = window.USERS;

let users = new Collection(USERS);

[...users]
  .filter((user) => user.get('email').endsWith('.biz'))
  .forEach((user) =>
    user.set('email', user.get('email').replace('.biz', '.org'))
  );

for (let user of users) {
  console.log(user.get('name'), `@${user.get('email')}`);
}
//
//
//
//
//
//
//
//
//
//
//
//
// ---------------> 43. korzystanie z promise
//

//
//
//
//
//
//
//
//
//
//
//
//
// --------------->
//

//
//
//
//
//
//
//
//
//
//
//
//
// --------------->
//
