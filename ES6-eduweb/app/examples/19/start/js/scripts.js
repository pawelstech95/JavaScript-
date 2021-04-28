let product = {
    name: "Płyta DVD",
    price: 1
};

let { name: pName, price: pPrice } = product;

let info = `Dodałeś do koszyka produkt: ${pName} w cenie ${pPrice}.`;

console.log(info);