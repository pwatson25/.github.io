fetch('https://api.openweathermap.org/data/2.5/forecast?&id=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771')
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        // go through the list of forecast values looking for 15:00 (3:00 p.m.) records and record index
        let tempforecast = [];
        let day = 1;
        jsObject.list.forEach(x => {
            if (x.dt_txt.includes('15:00:00')) {
                tempforecast[day] = x.main.temp;
                day++;
            }
        });

        for (let i = 1; i <= 5; i++) {
            document.getElementById('forecastday' + i).innerHTML = tempforecast[i];
        }
    });