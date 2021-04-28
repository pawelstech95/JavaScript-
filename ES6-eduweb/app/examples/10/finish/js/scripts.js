let getName = function() {

    throw new Error("Wystąpił błąd!");

    return "Jan";

};

let fn = getName;

let person = {
    getName: () => {
        throw new Error("Wystąpił błąd!");
    }
};

let newFn = getName.bind(null);

let getPersonName = new Function("", "return 'Jan';");