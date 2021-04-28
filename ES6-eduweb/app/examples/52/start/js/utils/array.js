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