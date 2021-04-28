export function toUpper(text) {
    return text.toUpperCase();
}

export function toLower(text) {
    return text.toLowerCase();
}

export function capitalize(text) {
    return toUpper(text.charAt(0)) + text.slice(1);
}

export function trim(text) {
    return text.trim();
}