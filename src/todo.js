const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = 'todos';

//part4-저장하기 위한 배열을 만든다.
let toDos = [];

// part4-localStorage에 할 일들을 저장하는 함수
function saveToDos() {
  // JSON.stringify는 string으로 만들어준다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// part3-클릭된 list를 삭제해주는 함수
function deleteTodo(event) {
  // event에는 target이라는 property를 가지고 있고 선택된 button의 부모 요소를 알 수 있는 parentElement 사용해서 알 수 있다.
  // part3-click된 button의 정보를 가져올 수 있는 코드를 상수로 선언
  const li = event.target.parentElement;
  // part3-선택 된 li를 삭제
  li.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
  saveToDos();
}
// console.log - 함수의 코드가 출력
// console.dir - 함수의 속성들이 출력

// part2-toDo를 그리는 함수 (handlToDoSubmit 함수가 PaintToDo를 사용하게 된다)
function paintToDo(newTodo) {
  // part2-li안에 span과 button이 있는 구조를 만들기 위해 요소생성 후 상수를 선언
  const li = document.createElement('li');
  li.id = newTodo.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = '❌';
  // part3-button을 click 시 deleteTodo함수가 실행
  button.addEventListener('click', deleteTodo);
  // part2-li밑에 span을 넣어준다.
  li.appendChild(button);
  li.appendChild(span);
  // part2-span안에 newTodo 값을 넣어준다.
  span.innerText = newTodo.text;
  // ul태그 안에 li요소를 넣어준다.
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  // Part1-input내용을 비우기 전에 input값을 저장
  const newTodo = toDoInput.value;
  // Part1-form을 submit하면 input의 내용을 비우는 코드
  toDoInput.value = '';
  const newTodoObj = {
    text : newTodo,
    id : Date.now(),
  };
  // part4-newTodo가 생성 될 때마다 toDos 배열에 push한다.
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

// Part1-toDoForm을 submit하면 handleTodoSubmit함수가 실행된다.
toDoForm.addEventListener('submit', handleTodoSubmit);

// part5-
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

