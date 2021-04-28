import { isObject } from "./Check.js";

export function serialize(data) {

    const e = encodeURIComponent;
    let output = "";

    if( !isObject(data) ) {
        return output;
    }

    for(let key of Object.keys(data)) {
        output += `${e(key)}=${e(data[key])}&`;
    }

    return output.slice(0, -1);

}