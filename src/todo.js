const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo;
  // ul태그 안에 li요소를 넣어준다.
  toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  // 새로고침 했을 때 다시 빈 칸이 보이게 하는 코드
  toDoInput.value = '';
  paintToDo(newTodo);
}

toDoForm.addEventListener('submit', handleTodoSubmit);
