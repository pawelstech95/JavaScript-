const _NODES = new WeakMap();

class eQuery {

    constructor(nodes) {

        if( !Array.isArray(nodes) ) {
            nodes = [nodes];
        }

        _NODES.set(this, nodes);

    }

    get() {
        return _NODES.get(this);
    }

    *[Symbol.iterator]() {
        yield *this.get();
    }

    static create(nodes) {
        return new eQuery(nodes);
    }

}

export default eQuery;