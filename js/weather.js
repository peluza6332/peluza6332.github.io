const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const KEY_API = 'ab221c7e263d67c323872af949ca5566';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY_API}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}
function onGeoError() {
    alert('위치 정보를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
