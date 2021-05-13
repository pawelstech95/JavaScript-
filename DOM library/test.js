let lis = eQuery('li');
// console.log(lis.get()) //[li, li, li, li, li]
// for (let li of lis) {
//   console.log(li);
// }

lis.attr('style', 'color: red');
lis.addClass('red');
lis.css('color', 'blue');
lis.text('Nowy tekst');
lis.html('<b>Nowa treć</b>');
lis.on('click', function () {
  console.log(eQuery(this).text());
});

lis.addClass('blue').css('font-size', '20px');
