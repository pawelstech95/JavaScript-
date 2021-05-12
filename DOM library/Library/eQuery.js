const _NODES = new WeakMap()


class eQuery {
  constructor(nodes) {
    if(!Array.isArray(nodes)){
        nodes = [nodes]
    }

 _NODES.set(this, nodes) // kluczem w WeakMmpie bedzie nowo utworzony obiekt
  }
  get(){
      return _NODES.get(this)
  }
  *[Symbol.iterator](){
      yield *this.get() // delegowanie generatorow
  }
  static create(nodes) {
    return new eQuery(nodes);
  }
}

export default eQuery;
