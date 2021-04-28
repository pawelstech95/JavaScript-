function getMaxLength(arr) {
    let lengths = arr.map(text => text.length);

    return Math.max(...lengths);
}

let columns = ["Imię", "Nazwisko", "Wiek"];

let length = getMaxLength(columns),
    output = "";

columns.forEach(function(text) {

    let textLength = text.length;

    output += "|";
    output += text.padStart(textLength + 4).padEnd(textLength + 8 + length - textLength);
    output += "|\n";

});

document.querySelector("#pre-62").textContent = output;