// // let i const
// // zmienne tworzone za pomocą let nie są wynoszone na gore tj var
// // nie dziala zjawisko hoistingu

// // literały
// //  -literałem  obiektu jest obiekt {}
// //           tablicy []

// // consise methods - skrócenie metody
// // syntactic sugar - dostajemy cos co zapisujemy inaczej ale działa tak samo

//                     let firstName = 'Jan',
//                     lastName = 'Kowalski';

//                     let fnName = 'getFullName';

//                     let person = {
//                     firstName,
//                     lastName,
//                     [fnName + '1']: 'Witaj', // w consoli person.getFullName1 zwróci 'Witaj'
//                     [fnName]() {
//                         // consise method - skrócone metody
//                         return this.firstName + ' ' + this.lastName;
//                     },
//                     };

//                     person[fnName] = function () {
//                     return this.firstName + ' ' + this.lastName;
//                     };

//                     console.log(person.getFullName());

// // wewnątrz literału obiektu {}, [] możemy tworzyć właściwośli
// // dynamiczne tworzenie za pomocą [fnName]
// // https://developer.mozilla.org/pl/docs/Web/JavaScript/Guide/Grammar_and_types
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining?fbclid=IwAR3Ecu2F8OAKfVWGEuz5ni4-egyOd25oowiBfre8drnV_LjE4GCsH7yAWcw



