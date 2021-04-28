const URL = "https://mojastrona.pl";
const filePath = "/Users/janek/Desktop/app/index.html";

function isHTTPS(text) {
    // return text.indexOf("https://") === 0;
    return text.startsWith("https://");
}

function hasExt(path, ext) {
    // return (new RegExp("\." + ext + "$")).test(path);
    return path.endsWith(`.${ext}`);
}

function includes(text, substring) {
    // return text.indexOf(substring) !== -1;
    return text.includes(substring);
}

console.log( isHTTPS(URL) );
console.log( hasExt(filePath, "html") );
console.log( includes("Ala ma kota", "ma") );
console.log( "=".repeat(10) );