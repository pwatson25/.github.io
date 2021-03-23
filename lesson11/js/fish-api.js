const summaryapiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=36089ae9649ea39369703e6946f36ac3";
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


  const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=36089ae9649ea39369703e6946f36ac3';


        fetch(forecastURL)
        .then((response) => response.json())
        .then((jsObject) => {
    
          var weekday = new Array(7);
          weekday[0] = "Sun";
          weekday[1] = "Mon";
          weekday[2] = "Tue";
          weekday[3] = "Wed";
          weekday[4] = "Thu";
          weekday[5] = "Fri";
          weekday[6] = "Sat";



          var dayOfWeek = document.getElementsByClassName("forecast-day");
          var weatherIcon = document.getElementsByClassName("weatherIcon");
          var data = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
          var temp = document.getElementsByClassName("forecast-data");
  
          for (var i = 0; i < data.length; i++) {
              var d = new Date(data[i].dt_txt);
              dayOfWeek[i].textContent = weekday[d.getDay()];
  
              const imagesrc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png';
              const description = data[i].weather[0].description;
              weatherIcon[i].setAttribute('src', imagesrc);
              weatherIcon[i].setAttribute('alt', description);
  
              temp[i].innerHTML = Math.round(data[i].main.temp) + " &#176;F";
          }
  
      });