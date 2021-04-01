let currentCity;

const apiKey = "e9a5fc2a165bcda7e086bb7e95914a2a";
let cities = []
let time = moment();
let search_button = document.getElementById("button-addon2");
let searchList = document.getElementById("searchList");
let cityEl = document.getElementById("nameOfCity");
let temperatureEl = document.getElementById("temperature");
let humidityEl = document.getElementById("humidity");
let windSpeedEl = document.getElementById("windSpeed");
let uvIndexEl = document.getElementById("uvIndex");
let rain= document.getElementById("iconRain");
let sun=document.getElementById("icon");
let sun2=document.getElementById("icon2");
let sun3=document.getElementById("icon3");
let sun5=document.getElementById("icon5");
let forecast1 = document.getElementById("forecast1");
let forecast2 = document.getElementById("forecast2");
let forecast3 = document.getElementById("forecast3");
let forecast4 = document.getElementById("forecast4");
let forecast5 = document.getElementById("forecast5");
let day1 = document.getElementById("day1Temp");
let day2 = document.getElementById("day2Temp");
let day3 = document.getElementById("day3Temp");
let day4 = document.getElementById("day4Temp");
let day5 = document.getElementById("day5Temp");
let humidDay1 = document.getElementById("humidDay1");
let humidDay2 = document.getElementById("humidDay2");
let humidDay3 = document.getElementById("humidDay3");
let humidDay4 = document.getElementById("humidDay4");
let humidDay5 = document.getElementById("humidDay5");




if(localStorage.getItem("cities") !== null){
cities = JSON.parse(localStorage.getItem("cities"))
}

//search button function
search_button.addEventListener("click", function(event){
event.preventDefault();
    currentCity = document.getElementById("search_input").value;
    cities.push(currentCity);
    localStorage.setItem("cities", JSON.stringify(cities));

    for (let i = 0; i < cities.length; i++) {
        let searchItem  = document.createElement('li')
        searchItem.classList.add("list-group-item");
        searchItem.textContent = cities[i];
        searchList.appendChild(searchItem);
        cities = [];
      }
    

    fetch("https://api.openweathermap.org/data/2.5/forecast?q=" +currentCity+"&appid="+apiKey +"&units=imperial")

    .then(response => response.json())

    .then(function(data){

        console.log(data);
        //display weather data
        cityEl.innerHTML = data.city.name + "(" + time.format("M/DD/YYYY ") + ") " + `<span class="iconify" data-inline="false" data-icon="emojione:sun-behind-small-cloud" style="font-size: 60px;"></span>`;
       temperatureEl.textContent = "Temperature: " + data.list[0].main.temp + " ℉";
       humidityEl.textContent = "Humidity:  " + data.list[0].main.humidity + " %";
       windSpeedEl.textContent = "Wind Speed:  " + data.list[0].wind.speed + " MPH ";

      //displays weather icons
       rain.innerHTML = `<span class="iconify" data-inline="false" data-icon="emojione:sun-behind-rain-cloud" style="font-size: 60px;"></span>`;
       sun.innerHTML = `<span class="iconify" data-inline="false" data-icon="emojione:sun" style="font-size: 60px;"></span>`;
       sun2.innerHTML = `<span class="iconify" data-inline="false" data-icon="emojione:sun" style="font-size: 60px;"></span>`;
       sun3.innerHTML = `<span class="iconify" data-inline="false" data-icon="emojione:sun" style="font-size: 60px;"></span>`;
       sun5.innerHTML = `<span class="iconify" data-inline="false" data-icon="emojione:sun" style="font-size: 60px;"></span>`;

      

      //displays weather
       day1.textContent = "Temp: "+data.list[3].main.temp + " ℉";
       day2.textContent = "Temp: "+data.list[11].main.temp + " ℉";
       day3.textContent = "Temp: "+data.list[19].main.temp + " ℉";
       day4.textContent = "Temp: "+data.list[27].main.temp + " ℉";
       day5.textContent = "Temp: "+data.list[35].main.temp + " ℉";
       
       humidDay1.textContent = "Humidity: "+data.list[3].main.humidity + " %";
       humidDay2.textContent = "Humidity: "+data.list[11].main.humidity+ " %";
       humidDay3.textContent = "Humidity: "+data.list[19].main.humidity + " %";
       humidDay4.textContent = "Humidity: "+data.list[27].main.humidity + " %";
       humidDay5.textContent = "Humidity: "+data.list[35].main.humidity + " %";
       //displays weather date
       forecast1.textContent = moment().add(1, 'days').calendar(); 
       forecast2.textContent = moment().add(2, 'days').calendar(); 
       forecast3.textContent = moment().add(3, 'days').calendar(); 
       forecast4.textContent = moment().add(4, 'days').calendar(); 
       forecast5.textContent = moment().add(5, 'days').calendar(); 
       
       
    
       
    })
    
});


