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

        if( Collection.hasIterator(models) ) {
            this.populate(models);
        }

    }

    populate(models) {

        for(let model of models) {
            this.models.push( new Model(model) );
        }

    }

    static hasIterator(obj) {
        return obj && typeof obj[Symbol.iterator] === "function";
    }

}

const USERS = window.USERS;