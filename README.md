# Chrome-App

<br>

## 소개
HTML, CSS, Vanilla JS를 이용하여 크롬 앱을 만들었습니다.

<br>

## 구현 기능
  - 사용자 이름을 받아서 localStorage에 담아서 기억

  <br>

  ## 구현 예정 기능
  - 현재 시간
  - 새로고침 시 바탕화면에 새로운 배경과 명언 보여주기
  - To Do List 추가&삭제
  - 사용자의 위치와 날씨 알림

<br>

## 사용 기능 설명 
  - html의 input 태그로 사용자 이름을 받기
  - preventDefault()함수를 이용해 submit된 값을 자동으로 리셋시키는 기능을 막음
  - localStroage로 받은 사용자 이름을 기억하기
    <br>localStroage는 브라우저에서 제공하는 저장하는 API이다. 
    <br>(setItem / getItem / removeItem을 사용할 수 있다)
  - new Date()객체에 있는 메소드로 현재 시간을 가져온다.
    <br>(getHourse() / getMinutes() / getSeconds())
  - setInterval()함수로 1초마다 시간을 업데이트한다.
  - padStart()로 한자리 숫자일 때 앞에 '0'을 붙여 두자리 수로 만들어준다.
  - Math()함수를 이용해 랜덤 숫자를 구한다.

<br>

## 문제 사항
  
<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: HTML, CSS, Vanilla JS

<br>

## Reference
  [노마드코더](https://www.youtube.com/channel/UCUpJs89fSBXNolQGOYKn0YQ)