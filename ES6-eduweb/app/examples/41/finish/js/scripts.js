const CACHE = {};

function $(selector) {
    return document.querySelector(selector);
}

function getJSON(url) {

    if(CACHE[url] !== undefined) {
        console.log("Zwracam dane z pamięci podręcznej");

        return Promise.resolve(CACHE[url]);
        // return Promise.reject( new Error("Nie można pobierać tych samych danych po raz kolejny") );
    }

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    let p = new Promise(function(resolve, reject) {

        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(xhr.responseText);
                CACHE[url] = xhr.responseText;
            } else {
                reject( new Error("Wystąpił błąd") );
            }
        };

        xhr.onerror = function() {
            reject( new Error("Wystapił błąd") );
        };

    });

    xhr.send();

    return p;

}

$("#btn-41").onclick = function() {

    getJSON("http://code.eduweb.pl/kurs-es6/json/")
        .then(json => {
            $("#pre-41").textContent = json;
        })
        .catch(err => $("#pre-41").textContent = err.message);

};