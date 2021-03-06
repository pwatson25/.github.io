
          var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
          var request = new XMLHttpRequest();
          request.open('GET', requestURL);
          request.responseType =  'json';
          request.send();
          request.onload = function() {
            var towndata = request.response;
     
            var towns = towndata['towns']; // array of towns in data file
            // Go through each town in the towns array of data
            for (var i = 0; i < towns.length; i++) {
              // only display items that match the current page
              if (towns[i].name == 'Preston') {
                document.getElementById('motto').innerHTML = "'" + towns[i].motto + "'";
                document.getElementById('yearFounded').innerHTML = towns[i].yearFounded;
                document.getElementById('population').innerHTML = towns[i].currentPopulation;
                document.getElementById('rainfall').innerHTML = towns[i].averageRainfall;
              }
            }
              for (var j = 0; j < towns.length; j++) {
              // only display items that match the current page
              if (towns[j].name == 'Soda Springs') {
                document.getElementById('motto2').innerHTML = "'" + towns[j].motto + "'";
                document.getElementById('yearFounded2').innerHTML = towns[j].yearFounded;
                document.getElementById('population2').innerHTML = towns[j].currentPopulation;
                document.getElementById('rainfall2').innerHTML = towns[j].averageRainfall;
              }
              for (var k = 0; k < towns.length; k++) {
              // only display items that match the current page
              if (towns[k].name == 'Fish Haven') {
                document.getElementById('motto3').innerHTML = "'" + towns[k].motto + "'";
                document.getElementById('yearFounded3').innerHTML = towns[k].yearFounded;
                document.getElementById('population3').innerHTML = towns[k].currentPopulation;
                document.getElementById('rainfall3').innerHTML = towns[k].averageRainfall;
              }
            }
            }   
          }