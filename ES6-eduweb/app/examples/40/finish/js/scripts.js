function $(selector) {
    return document.querySelector(selector);
}

function getJSON(url) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    let p = new Promise(function(resolve, reject) {

        xhr.onload = function() {
            if(xhr.status === 200) {
                resolve(xhr.responseText);
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

$("#btn-40").onclick = function() {

    getJSON("http://code.eduweb.pl/kurs-es6/json/")
        .then(json => {
            $("#pre-40").textContent = json;
            // return JSON.parse(json);
            return getJSON("ttp://code.eduweb.pl/kurs-es6/json/?shuffle=1");
        })
        .then(obj => {
            console.log(obj);
            // throw new Error("Wystąpił inny błąd");
        })
        .catch(err => $("#pre-40").textContent = err.message);

};