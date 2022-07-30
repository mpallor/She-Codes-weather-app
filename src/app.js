function currentDateAndTime() {
  let currentDate = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let day = days[currentDate.getDay()];
  let hour = currentDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let date = currentDate.getDate();
  let month = months[currentDate.getMonth()];
  let year = currentDate.getFullYear();

  if (new Date()) {
    return `Current time <small> ${day} ${hour}:${minutes} ${date} ${month} ${year} </small>`;
  }
}

// HOMEWORK WEEK 5

function displayWeather(response) {
  let temp = document.querySelector("#tempToday");
  temp.innerHTML = Math.round(response.data.main.temp);

  document.querySelector("#today-city").innerHTML = response.data.name;
  document.querySelector("#next-week-city").innerHTML = response.data.name;
}

function searchCity(city) {
  let apiKey = "c6250be52ad7bd4f277e12656c8e390e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#input-city").value;
  searchCity(city);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiKey = "c6250be52ad7bd4f277e12656c8e390e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

function convertTempF(event) {
  event.preventDefault();
  let temperature = document.querySelector("#tempToday");
  temperature.innerHTML = `66`;
}

let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", convertTempF);

function convertTempC(event) {
  event.preventDefault();
  let temperature = document.querySelector("#tempToday");
  temperature.innerHTML = `19`;
}

let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", convertTempC);

let newDate = document.querySelector("#day-time");
newDate.innerHTML = currentDateAndTime();

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Krakow");
