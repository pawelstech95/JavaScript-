import core from "core-js/library";
import Employee from "./Employee.js";

let employee1 = new Employee("Jan", "Kowalski", "programista");

console.log( core.String.repeat(employee1.sayHello(), 3) );

const s = new Set();