import Attributes from './Attributes.js';
import Iteration from './Iteration.js';
import Content from './Content.js';
import { mixin } from '../Utils/Mixin.js';
// uwagi - chcemy dodac itteration i attributes do naszej klasy
// nie mozemy napisac class e!uery extends zwykly object
// mozemy rozszzac nie tylko klasy ale tez funkcje poprzez prototp
//
// const fn = function () {}; // ta fn ma prototyp do ktorego przypisujemy poprzez obj.assign

const _NODES = new WeakMap();

// UWAGA - MIXIN SPRAWDZ
class eQuery extends mixin(Attributes, Iteration, Content) {
  constructor(nodes) {
    super();
    if (!Array.isArray(nodes)) {
      nodes = [nodes];
    }

    _NODES.set(this, nodes); // kluczem w WeakMmpie bedzie nowo utworzony obiekt
  }
  get(index) {
    let nodes = _NODES.get(this);
    if (Number.isInteger(index)) {
      // jezeli jest wart numeryczna
      return nodes[index];
    } else {
      return nodes;
    }
  }
  *[Symbol.iterator]() {
    yield* this.get(); // delegowanie generatorow
  }
  static create(nodes) {
    return new eQuery(nodes);
  }
}

export default eQuery;
