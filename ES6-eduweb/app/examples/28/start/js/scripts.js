const hidden = Symbol("hidden");

let person = {
    [hidden]: "123jkasdKhasdf$901-123",
    getSecret() {
        return this[hidden];
    }
};