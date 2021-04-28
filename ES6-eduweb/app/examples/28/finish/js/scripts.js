// const hidden = Symbol("hidden");
const hidden = Symbol.for("hidden");

let person = {
    [hidden]: "123jkasdKhasdf$901-123",
    getSecret() {
        return this[ Symbol.for("hidden") ];
    }
};

console.log( Symbol.keyFor(hidden) );
console.log( Object.getOwnPropertyNames(person) );
console.log( Object.getOwnPropertySymbols(person) );