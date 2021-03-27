let city;
const apiKey = "e9a5fc2a165bcda7e086bb7e95914a2a";
let btn = document.getElementById("btn");
// let search = document.getElementById("search_input");






btn.addEventListener("click", function(){

    
    city = document.getElementById("search_input").value;

    window.localStorage.setItem("History" ,JSON.stringify(city) );
    console.log(window.localStorage.getItem("History"));
   


    
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid="+apiKey)
    .then(response => response.json() )
    .then(data => console.log(data))

})

