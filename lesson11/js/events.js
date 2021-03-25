const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const eventsobj = jsonObject['towns'];
        if (document.getElementById("town-tag").innerHTML.indexOf("Preston") != -1) {
            var townevent = eventsobj.filter(index => index.name.includes('Preston'));
        } else if (document.getElementById("town-tag").innerHTML.indexOf("Soda") != -1) {
            var townevent = eventsobj.filter(x => x.name.includes('Soda'));
        } else {
            var townevent = eventsobj.filter(x => x.name.includes('Fish'));
        }

        for (i = 0; i < townevent[0].events.length; i++) {
            document.getElementById("events").innerHTML += "<p>" + townevent[0].events[i] + "</p>";
        }

    });