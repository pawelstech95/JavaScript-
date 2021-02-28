




// function wykonaj(event, eventObj) {
//   var e = event;
//   var srcElement = e.target;

//   var tmp = document.getElementById('tmp');
//   tmp.innerHTML =
//     'zródło eventu; ' +
//     srcElement.tagName +
//     '<br>event przypisany do tagu: ' +
//     eventObj.tagName;
// }

// window.onload = function () {
//   var test = document.getElementById('test');
//   var pogrubiony = document.getElementById('pogrubiony');
//   var przycisk = document.getElementById('przycisk');

//   test.onmousemove = function (event) {
//     wykonaj(event, this);
//   };
// };

// function wykonaj(event) {
//   var tmp = document.getElementById('tmp');

//   tmp.innerHTML = event.altKey;
// }

// window.onload = function () {
//   var test = document.getElementById('test');

//   test.onmousemove = wykonaj;
// };

// *******************************************

// function powiekszCzcionke() {
//   var fontSize = parseInt(window.getComputedStyle(this).fontSize);
//   this.style.fontSize = ++fontSize + 'px';
// }
// function zmienKolor1() {
//   this.className = 'zmienKolor1';
// }
// function zmienKolor2() {
//   this.removeAttribute('class');
// }

// var test = document.getElementById('test');
// var stop = document.getElementById('stop');

// test.addEventListener('mouseover', zmienKolor1);
// test.addEventListener('mouseover', powiekszCzcionke);
// test.addEventListener('mouseout', zmienKolor2);

// stop.addEventListener('click', function () {
//   test.removeEventListener('mouseover', powiekszCzcionke);
// });
// stop.addEventListener('moseout', function () {
//   test.addEventListener('moseover', powiekszCzcionke);
// });
