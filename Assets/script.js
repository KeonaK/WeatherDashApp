let currentCity;
const apiKey = "e9a5fc2a165bcda7e086bb7e95914a2a";
let cities = []
let search_button = document.getElementById("button-addon2");
let searchList = document.getElementById("searchList");


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
    

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+currentCity+"&appid="+apiKey)

    .then(response => response.json())

    .then(function(data){

        console.log(data);
    })
    
});
