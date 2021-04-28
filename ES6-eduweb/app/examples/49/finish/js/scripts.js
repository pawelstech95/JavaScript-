var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    _age: 32
};

let proxy = new Proxy(person, {

    get(target, property, receiver) {
        // console.log(target);
        // console.log(property);
        // console.log(receiver);

        if(property.charAt(0) === "_") {
            return undefined;
        }

        return Reflect.get(target, property, receiver);
    }

});