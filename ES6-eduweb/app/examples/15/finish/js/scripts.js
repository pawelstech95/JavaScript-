let person = {
    firstName: "Jan",
    lastName: "Kowalski",
    age: 49,
    job: {
        name: "Programista",
        experience: 20
    },
    favNumbers: {
        list: [2, 7, 3]
    }
};

let {
    firstName: fName,
    age,
    job: {
        name: jobName,
        experience: jobExperience
    },
    favNumbers: {
        list: [, second]
    }
} = person || {};

console.log(fName, age, jobName, jobExperience, second);