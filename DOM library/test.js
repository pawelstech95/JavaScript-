let lis = eQuery('li');
// console.log(lis.get()) //[li, li, li, li, li]
// for (let li of lis) {
//   console.log(li);
// }

lis.attr('style', 'color: red');
lis.addClass('red');
lis.css('color', 'blue')
