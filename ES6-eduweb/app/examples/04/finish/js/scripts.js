let firstName = "Jan",
    lastName = "Kowalski";

let fnName = "getFullName";

let person = {
    firstName,
    lastName,
    [fnName + "1"]: "Witaj!",
    [fnName]() {
        return this.firstName + " " + this.lastName;
    }
};

// person[fnName] = function() {
//     return this.firstName + " " + this.lastName;
// }

console.log( person.getFullName() );