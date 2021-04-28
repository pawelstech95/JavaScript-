function removeFalsyValues(arr) {
    return arr.filter(value => !!value);
}

function removeDuplicates(arr) {
    return [...(new Set(arr))];
}

function sort(arr) {
    arr.sort();
    return arr;
}

// export default sort;
export { sort as default, removeDuplicates as rmDuplicates, removeFalsyValues };
export * from "./string.js";