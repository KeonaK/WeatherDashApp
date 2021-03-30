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
        cityEl.textContent = data.city.name + "(" + time.format("M/DD/YYYY ") + ")";
       temperatureEl.textContent = "Temperature: " + data.list[0].main.temp + " ℉";
       humidityEl.textContent = "Humidity:  " + data.list[0].main.humidity + " %";
       windSpeedEl.textContent = "Wind Speed:  " + data.list[0].wind.speed + " MPH ";
       
    })
    
});

//5 day forcast 
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
