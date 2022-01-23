# Chrome-App

<br>

## 소개
HTML, CSS, Vanilla JS를 이용하여 크롬 앱을 만들었습니다.

<br>

## 구현 기능
  - 사용자 이름을 저장 후 시간대에 따른 인사말과 함께 출력
  - 현재 시간(시:분:초)
  - 새로고침 시 바탕화면에 새로운 배경과 명언 보여주기
  - To Do List 추가 & 삭제
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
  - appendChild()메소드로 만든 img태그를 body영역에 마지막 자식으로 추가해준다.
  - stringify()로 toDos 배열의 요소를 문자열로 변환해 localStorage에 복사한다.
  - parse()로 localStorage에 복사되어있던 요소들을 다시 가져와 배열의 형태로 만들어준다.
  - 리스트를 생성했을 때 주어졌던 id를 filter()통해 선택된 toDo의 id가 li의 id와 다른 것은 남긴다.
    <br>이 때, li의 id값은 숫자이기 때문에 parse()를 사용해 문자열을 숫자로 바꿔준다.

<br>

## 문제 사항
  
<br>

## 개발 환경
  - 개발도구: VSCode, Github
  - 사용언어: HTML, CSS, Vanilla JS

<br>

## 최종 결과물
<img width="640" alt="최종 결과문" src="https://user-images.githubusercontent.com/93115007/150671891-a41c3600-dbff-4822-8526-8e83aefde7d5.png">

<br>

## Reference
  [노마드코더](https://www.youtube.com/channel/UCUpJs89fSBXNolQGOYKn0YQ)