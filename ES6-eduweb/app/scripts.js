//example 1
function* it(number) {
  let result = (yield) + number * 2; // yield bez () = 10 // z ()undefined
  console.log('druga linijka');
  yield result;
}
let iterator = it(5);

console.log(iterator.next());
console.log(iterator.next(2)); // 2 wpada pod (yield)
//example 2

function ajax(url) {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  return xhr;
}
function* showData(url) {
  let result = yield ajax(url);
  document.querySelector('.lesson39').textContent = result;
}

function makeRequest(url, gen) {

    let it = gen(url);

    let xhr = it.next().value;

    xhr.onload = function() {
        if(xhr.status === 200) {
            it.next(xhr.responseText);
        }
    };

    xhr.send();

}

makeRequest("http://code.eduweb.pl/kurs-es6/json/", showData);