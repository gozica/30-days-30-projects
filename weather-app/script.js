const apiKey = "e049244c47b06da6db12af4f0ec42242";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
     document.querySelector(".weather").style.display = "none";
  }else{
  const data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°f";
  document.querySelector(".humidity").innerHTML =
    Math.round(data.main.humidity) + "%";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " mph";





     if (data.weather[0].main == "Clouds") {
       weatherIcon.src = "images/clouds.png";
     } else if (data.weather[0].main == "Clear") {
       weatherIcon.src = "images/clear.png";
     } else if (data.weather[0].main == "Rain") {
       weatherIcon.src = "wimages/rain.png";
     } else if (data.weather[0].main == "Drizzle") {
       weatherIcon.src = "images/drizzle.png";
     } else if (data.weather[0].main == "Mist") {
       weatherIcon.src = "images/mist.png";
     }

     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";

  }


}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

