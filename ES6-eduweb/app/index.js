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
let getName = function(){ // funkcja anonimowa nie ma dostepu do name ale
  throw new Error('Wystąpił błąd'); // dzieki deklaracji let getName js juz daje nam dostęp do name
  return 'jan';
}
let newFn = getName.bind(null) // newFn.name = 'bound getName'
