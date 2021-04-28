import { getValue, setValue, obj } from "./functions.js";
import { obj as obj2 } from "./objects.js";

console.log( Object.is(obj, obj2) );

console.log( getValue() );

// setValue(20);

console.log( getValue() );