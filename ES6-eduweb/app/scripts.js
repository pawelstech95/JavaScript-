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

    [Symbol.iterator]() {
        var models = this.models,
            index = 0;

        return {
            next: function() {
                return {
                    done: (index === models.length) ? true : false,
                    value: models[index++]
                };
            }
        };
    }

    static hasIterator(obj) {
        return obj && typeof obj[Symbol.iterator] === "function";
    }

}

const USERS = window.USERS;

let users = new Collection(USERS);

[...users]
    .filter(user => user.get("email").endsWith(".biz"))
    .forEach(user => user.set("email", user.get("email").replace(".biz", ".org")));

for(let user of users) {
    console.log(user.get("email"));
}