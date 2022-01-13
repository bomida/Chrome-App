const clock = document.querySelector('#clock');

function getClock() {
  // new Date()는 시간을 가져오는 함수
  const date = new Date();
  // String()안에 데이터를 넣으면 문자열로 바꿔준다.
  // padStart(length, 채워넣을 문자열)는 원하는 만큼의 길이가 아니라면 string의 앞쪽에 문자를 넣어주는 함수 -> 반대로 padEnd()함수도 있다.
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// setInterval은 지정한 시간이 지나면 무한대로 함수를 반복해주는 함수
// setTimeout은 지정한 시간이 지나면 한번만 함수를 실행시켜주는 함수
setInterval(getClock, 1000);
