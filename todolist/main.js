//? 93
const todoInput = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-button");
const formTodo = document.querySelector(".todo-form");

const todoList = document.querySelector(".todoList");

const todos = [];
function addTodo(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    title: todoInput.value,
    createdAt: new Date().toISOString(),
    isCompleted: false,
  };
  todos.push(newTodo);

  let result = "";
  todos.forEach((todo) => {
    result += `
            <li class="todo">
                <p class="todo__title">${todo.title}</p>
                <span class="todo__createdAt">${new Date(todo.createdAt).toLocaleDateString('fa-IR')}</span>
                <button data-todo-id=${todo.id} ><i class="todo__check far fa-check-square"></i></button>
                <button data-todo-id=${todo.id} ><i class="todo__remove far fa-trash-alt"></i></button>
            </li>
  `;
    todoList.innerHTML = result;
  });

  todoInput.value = "";
  console.log(todos);
}
formTodo.addEventListener("submit", addTodo);