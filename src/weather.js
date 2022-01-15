function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`You live in, ${lat}, ${lng}`);
}

function onGeoError() {
  alert(`Can't find you.\nNo weather for you. :(`);
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
// getCurrentPosition() 함수는 두개의 인자가 필요하다
// 하나는 모든 게 잘 되었을 때 실행되는 함수, 또 하나는 에러가 발생했을 때 실행되는 함수
