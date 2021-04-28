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

function timeout(ms) {

    return new Promise(function(resolve, reject) {
        setTimeout(() => reject( new Error(`Czas ${ms}ms został przekroczony`) ), ms);
    });

}

$("#btn-42").onclick = function() {

    // Promise.all([
    //     getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1"),
    //     getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1")
    // ])
    // .then(data => {
    //     $("#pre-42").textContent = `${data[0]}\n\n${"=".repeat(70)}\n\n${data[1]}`;
    // })
    // .catch(err => $("#pre-42").textContent = err.message);

    // Promise.race([
    //     getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1"),
    //     getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1")
    // ])
    // .then(json => $("#pre-42").textContent = json)
    // .catch(err => $("#pre-42").textContent = err.message);

    Promise.race([
        getJSON("http://code.eduweb.pl/kurs-es6/json/?shuffle=1"),
        timeout(100)
    ])
    .then(json => $("#pre-42").textContent = json)
    .catch(err => $("#pre-42").textContent = err.message);

};