let locationObj;
const apiKey = "e9a5fc2a165bcda7e086bb7e95914a2a";
let btn = document.getElementById("btn");


// let search = document.getElementById("search_input");






btn.addEventListener("click", function(){

    locationObj = document.getElementById("search_input").value;
    

    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+locationObj+"&appid="+apiKey)

    .then(response => response.json())

    .then(function(data){
        cityName = data.city.name;
        window.localStorage.setItem( cityName, locationObj);
        console.log(window.localStorage.getItem(cityName));

        console.log(data);

    })

})

