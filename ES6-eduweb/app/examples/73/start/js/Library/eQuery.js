import Attributes from "./Attributes.js";
import Iteration from "./Iteration.js";
import Content from "./Content.js";
import { mixin } from "../Utils/Mixin.js";

const _NODES = new WeakMap();

class eQuery extends mixin(Attributes, Iteration, Content) {

    constructor(nodes) {

        super();

        if( !Array.isArray(nodes) ) {
            nodes = [nodes];
        }

        _NODES.set(this, nodes);

    }

    get(index) {
        let nodes = _NODES.get(this);

        if( Number.isInteger(index) ) {
            return nodes[index];
        } else {
            return nodes;
        }
    }

    *[Symbol.iterator]() {
        yield *this.get();
    }

    static create(nodes) {
        return new eQuery(nodes);
    }

}

export default eQuery;