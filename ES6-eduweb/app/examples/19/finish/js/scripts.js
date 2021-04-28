function formatPrice(strings, ...values) {

    let output = "";

    strings.forEach(function(string, index) {
        let value = values[index];

        output += string;

        if(value !== undefined) {

            if(typeof value === "number") {
                output += value.toFixed(2) + " PLN";
            } else {
                output += value;
            }

        }
    });

    return output;

}

let product = {
    name: "Płyta DVD",
    price: 1
};

let { name: pName, price: pPrice } = product;

let info = formatPrice`Dodałeś do koszyka produkt: ${pName} w cenie ${pPrice}.`;

console.log(info);