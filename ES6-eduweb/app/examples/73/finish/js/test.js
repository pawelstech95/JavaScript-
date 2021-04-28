let lis = eQuery("li");

lis.on("click", function() {

    console.log( eQuery(this).text() );

});