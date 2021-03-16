let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=36089ae9649ea39369703e6946f36ac3";

weatherRequest.open('Get', apiURL, true);
weatherRequest.send();

// note the weather array versus main (no array)

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);    

    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    let imagesrc = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + '.png';
    document.getElementById('weatherimage').innerHTML = imagesrc;
}