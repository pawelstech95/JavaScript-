export function removeFalsyValues(arr) {
    return arr.filter(value => !!value);
}

export function removeDuplicates(arr) {
    return [...(new Set(arr))];
}

export function sort(arr) {
    arr.sort();
    return arr;
}