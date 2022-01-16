const weather = document.querySelector('#weather span:first-child');
const city = document.querySelector('#weather span:last-child');
const API_KEY = '15b4ffd5b8bca7d558f2320a138ed0dc';

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("You live in", lat, lng);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });         
}

function onGeoError() {
  alert(`Can't find you.\nNo weather for you. :(`);
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
// getCurrentPosition() 함수는 두개의 인자가 필요하다
// 하나는 모든 게 잘 되었을 때 실행되는 함수, 또 하나는 에러가 발생했을 때 실행되는 함수

