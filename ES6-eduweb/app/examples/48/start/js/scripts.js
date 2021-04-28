var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },
    setFullName: function(fullName) {
        var parts = fullName.split(" ");

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};