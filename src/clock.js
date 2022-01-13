const clock = document.querySelector('#clock');

let setClickHours = date.getHours();
let setClickMinutes = date.getMinutes();



function clocking() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}`;
}

setInterval(clocking, 60000);

