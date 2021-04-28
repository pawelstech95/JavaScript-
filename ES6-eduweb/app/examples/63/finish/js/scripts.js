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

async function getData(url) {

    let json = await getJSON(url);
    let json2 = await getJSON(url + "?shuffle=1");

    $("#pre-63").textContent = `${json}\n\n${"=".repeat(70)}\n\n${json2}`;

}

$("#btn-63").onclick = function() {

    getData("http://code.eduweb.pl/kurs-es6/json/");

};

/*

async function fn() {}
const fn = async function () {};
let obj = { async fn() {} }
const fn = async () => {};

*/