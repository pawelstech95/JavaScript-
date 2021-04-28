eQuery("#btn-75").on("click", function() {

    eQuery.get("http://code.eduweb.pl/kurs-es6/json/")
        .then(data => eQuery("#pre-75").text(data))
        .catch(err => eQuery("#pre-75").text(err.message));

});