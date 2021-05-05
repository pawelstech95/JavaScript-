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
      this[0] = args[0];
    } else {
      super(...args);
    }
  }
}

let col = new Collection(10, 20, 30);
