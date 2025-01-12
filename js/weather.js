import config from "./config.js";
const { API_KEY } = config;

function onGeoOk(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather-sec span:first-child');
        const city = document.querySelector('#weather-sec span:last-child');
        city.innerHTML = data.name;
        weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}


function onGeoErr() {
    alert("Can't fint you. NO weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);