// function *gen() {

//     yield 1;
//     yield *[2, 3, 4];
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

    *[Symbol.iterator]() {
        yield *this.models;
    }

}

const USERS = window.USERS;

let users = new Collection(USERS);

[...users]
    .filter(user => user.get("email").endsWith(".biz"))
    .forEach(user => user.set("email", user.get("email").replace(".biz", ".org")));

for(let user of users) {
    console.log(user.get("name"), `@${user.get("email")}`);
}