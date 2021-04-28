function $(selector) {
    return document.querySelector(selector);
}

function getJSON(url) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    xhr.onload = function() {
        if(xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.log( new Error("Wystąpił błąd") );
        }
    };

    xhr.onerror = function() {
        console.log( new Error("Wystapił błąd") );
    };

    xhr.send();

}

$("#btn-39").onclick = function() {

    getJSON("ttp://code.eduweb.pl/kurs-es6/json/");

};