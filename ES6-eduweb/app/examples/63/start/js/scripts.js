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

function run(gen, ...args) {

    let it = gen(...args),
        result;

    function next(value) {

        result = it.next(value);

        if(!result.done) {

            if(typeof result.value.then === "function") {
                result.value.then(next);
            }
        }

    }

    next();

}

$("#btn-63").onclick = function() {

    run(function *(url) {

        let json = yield getJSON(url);
        let json2 = yield getJSON(url + "?shuffle=1");

        $("#pre-63").textContent = `${json}\n\n${"=".repeat(70)}\n\n${json2}`;

    }, "http://code.eduweb.pl/kurs-es6/json/");

};