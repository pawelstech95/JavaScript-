// import sort from "./utils/array.js";
// import { rmDuplicates, removeFalsyValues as rmFalsyValues } from "./utils/array.js";
// import { default as sort, rmDuplicates, removeFalsyValues as rmFalsyValues } from "./utils/array.js";
import sort, { rmDuplicates, removeFalsyValues as rmFalsyValues, trim } from "./utils/array.js";
import * as config from "./config/constants.js";

let arr = [1, 2, 1, 3, 0, 4, 1];

console.log( rmFalsyValues( rmDuplicates( sort(arr) ) ) );

console.log( trim("  Piotr") );

console.log(config);