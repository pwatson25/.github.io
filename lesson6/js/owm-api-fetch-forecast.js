const summaryapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=36089ae9649ea39369703e6946f36ac3";
fetch(summaryapiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('currently').textContent = jsObject.weather[0].description;
    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind-speed').textContent = jsObject.wind.speed;

    let temp = jsObject.main.temp;
    let speed = jsObject.wind.speed;

  document.querySelector("#windchill").textContent = "N/A";
  function windchill(t,s) {
      let f = 35.74 + (0.6215 * t) - (35.75 * (Math.pow(s , 0.16))) + (0.4275 * (t * (Math.pow(s , 0.16))))
      return f;
  }
  
  
  if (temp<=50 && speed>=3) {
      document.querySelector('#windchill').innerHTML = Math.round(windchill(temp,speed))+"&deg;"+" F";
  }
  })
  ;


fetch('https://api.openweathermap.org/data/2.5/forecast?&id=5604473&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771')
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        // go through the list of forecast values looking for 18:00 (6:00 p.m.) records and record index
        let tempforecast = [];
        let day = 1;
        jsObject.list.forEach(x => {
            if (x.dt_txt.includes('18:00:00')) {
                tempforecast[day] = x.main.temp;
                day++;
            }
        });

        for (let i = 1; i <= 5; i++) {
            document.getElementById('forecastday' + i).innerHTML = tempforecast[i];
        }
    });
 