eQuery("#btn-76").on("click", function() {

    eQuery.get("http://code.eduweb.pl/kurs-es6/json/")
        .then(data => eQuery("#pre-76").text(data))
        .catch(err => eQuery("#pre-76").text(err.message));

});