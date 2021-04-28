export function isSelector(value) {
    return (
        typeof value === "string" &&
        !isHTMLTag(value) &&
        !isDOMNode(value)
    );
}

export function isHTMLTag(value) {
    return (
        typeof value === "string" &&
        value.charAt(0) === "<" && value.charAt(value.length - 1) === ">"
    );
}

export function isDOMNode(value) {
    return (
        typeof value === "object" &&
        value instanceof Element
    );
}

export function isObject(value) {
    return value && value.toString() === "[object Object]";
}