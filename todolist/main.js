//? 93


let todos = [];
let filterValue = "all";

// selecting
const todoInput = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-button");
const formTodo = document.querySelector(".todo-form");

const todoList = document.querySelector(".todoList");
const selectFilter = document.querySelector(".filter-todos");

const removeBtn = document.querySelectorAll('.todo__remove')
// event
formTodo.addEventListener("submit", addTodo);
selectFilter.addEventListener("change", (e) => {
  filterValue = e.target.value
  filterTodos()
});



function addTodo(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    title: todoInput.value,
    createdAt: new Date().toISOString(),
    isCompleted: false,
  };
  todos.push(newTodo);

  // create todo on DOM
  filterTodos();
}

//! create todos
function createTodos(todos) {
  let result = "";
  todos.forEach((todo) => {
    result += `
            <li class="todo ${todo.isCompleted && "completed"}">
                <p class="todo__title ">${todo.title}</p>
                <span class="todo__createdAt">${new Date(
                  todo.createdAt
                ).toLocaleDateString("fa-IR")}</span>
                <button class="todo__check" data-todo-id=${
                  todo.id
                }><i class="far fa-check-square"></i></button>
                <button class="todo__remove" data-todo-id=${
                  todo.id
                }><i class="far fa-trash-alt"></i></button>
            </li>
  `;
  });

  todoList.innerHTML = result;
  todoInput.value = "";

  const removeBtn = [...document.querySelectorAll(".todo__remove")];
  removeBtn.forEach((btn) => {
    btn.addEventListener("click", removeTodo);
  });

  // check todo
  const checkBtn = [...document.querySelectorAll(".todo__check")];
  checkBtn.forEach((todo) => todo.addEventListener("click", checkTodo));
}

//! filter todos
function filterTodos() {
  switch (filterValue) {
    case "all": {
      createTodos(todos);
      break;
    }
    case "completed": {
      const filteredTodos = todos.filter((todo) => todo.isCompleted);
      createTodos(filteredTodos);
      break;
    }
    case "uncompleted": {
      const filteredTodos = todos.filter((todo) => !todo.isCompleted);
      createTodos(filteredTodos);
      break;
    }
    default:
      createTodos(todos)
  }
}

//! remove todo
function removeTodo(e) {
  const todoId = Number(e.target.dataset.todoId);
  todos = todos.filter((todo) => todo.id !== todoId);
  filterTodos();
}

//? 403/8/2
//? start: 97, end: 
//! check todo
function checkTodo(e) {
  const todoId = Number(e.target.dataset.todoId);
  const todo = todos.find((t) => t.id === todoId);
  todo.isCompleted = !todo.isCompleted
  filterTodos()
}