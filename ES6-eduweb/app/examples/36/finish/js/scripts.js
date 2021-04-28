function ajax(url) {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);

    return xhr;

}

function makeRequest(url, gen) {

    let it = gen(url);

    let xhr = it.next().value;

    xhr.onload = function() {
        if(xhr.status === 200) {
            it.next(xhr.responseText);
        }
    };

    xhr.onerror = function() {
        it.throw( new Error("Wystąpił błąd") );
    };

    xhr.send();

}

function *showData(url) {

    let output = document.querySelector("#pre-36");

    try {
        let result = yield ajax(url);
        output.textContent = result;
    } catch(e) {
        output.textContent = e.message;
    }


}

makeRequest("ttp://code.eduweb.pl/kurs-es6/json/", showData);