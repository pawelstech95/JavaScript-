eQuery("#btn-75").on("click", function() {

    // eQuery.get("http://code.eduweb.pl/kurs-es6/json/")
    //     .then(data => eQuery("#pre-75").text(data))
    //     .catch(err => eQuery("#pre-75").text(err.message));

    eQuery.post("http://code.eduweb.pl/kurs-es6/send_back/", {
        firstName: "Jan",
        lastName: "Kowalski"
    })
        .then(data => eQuery("#pre-75").text(data))
        .catch(err => eQuery("#pre-75").text(err.message));

});