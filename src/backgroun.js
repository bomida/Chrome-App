const imgs = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];

const chosenImg = imgs[Math.floor(Math.random()*imgs.length)];

const background = document.querySelector('#background');
const bgImg = document.createElement('img');

bgImg.src = `/img/${chosenImg}`;

background.appendChild(bgImg);