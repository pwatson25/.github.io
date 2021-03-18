fetch('https://api.openweathermap.org/data/2.5/find?lat=42.096&lon=-111.877&cnt=50&units=imperial&APPID=07407eccd051a7a7b4fc81e187f47771')
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        const forecastData = jsObject.list.filter((element)=>element.id.includes('5604473' || '5585010' || '5607916'));

        console.log(forecastData);

        document.getElementById('current-temp').textContent = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        const desc = jsObject.weather[0].description;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);
    });