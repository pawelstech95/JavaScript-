// let lis = eQuery('li');
// // console.log(lis.get()) //[li, li, li, li, li]
// // for (let li of lis) {
// //   console.log(li);
// // }

// lis.attr('style', 'color: red');
// lis.addClass('red');
// lis.css('color', 'blue');
// lis.text('Nowy tekst');
// lis.html('<b>Nowa treć</b>');
// lis.on('click', function () {
//   console.log(eQuery(this).text());
// });

// lis.addClass('blue').css('font-size', '20px');
// Propise, Ajax
//get
eQuery('#btn').on('click', function () {
  //   eQuery
  //     .get('http://code.eduweb.pl/kurs-es6/json/')
  //     .then((data) => eQuery('#preJson').text(data))
  //     .catch((err) => eQuery('#preJson').text(err.message));
  // });

  // post
  eQuery
    .post('http://code.eduweb.pl/kurs-es6/send_back/', {
      firstName: 'Jan',
      lastName: 'Kowalski',
    })
    .then((data) => eQuery('#pre-75').text(data))
    .catch((err) => eQuery('#pre-75').text(err.message));
});
