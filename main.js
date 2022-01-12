const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// 구분을 위해 string만 포함된 변수를 선언 할 때는 대문자 이름을 사용
const HIDDEN_CLASSNAME = 'hidden';  
const USERNAME_KEY = 'username';


function onLoginSubmit(event) {
  // 브라우저의 기본 동작을 막아준다.
  event.preventDefault();
  // class이름을 추가해주어 form 태그를 안보이게 한다.
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // loginInput의 값을 변수로 선언한다.
  const username = loginInput.value;
  // 저장한 변수를 localStroage에 저장한다.
  //localStroage는 브라우저에서 제공하는 저장하는 API이다. (localStroage.+setItem / getItem / removeItem을 사용할 수 있다)
  localStorage.setItem(USERNAME_KEY, username);
  // paintGreetings 함수를 호출한다.
  paintGreetings(username);
}

function paintGreetings(username) {
  // submit으로 가져온 정보를 innerText를 사용해 비어있는 h1태그에 넣어준다.
  greeting.innerText = `Hello ${username}`;
  // 반대로 class이름을 제거하여 h1을 보이게 한다.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에 저장된 username을 변수로 선언한 것
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // savedUsername 값이 null이라면 form의 hidden class명이 지워진다.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  // Submit event가 발생할 때 onLoginSubmit이라는 함수를 호출
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}