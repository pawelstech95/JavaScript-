export function findElements(selector) {
    return Array.from( document.querySelectorAll(selector) );
}

export function createElement(htmlTag) {

    let result = (/<(.+)>/).exec(htmlTag);

    if(result && result[1]) {
        return document.createElement(result[1]);
    } else {
        throw new Error("Niepoprawny tag HTML.");
    }

}