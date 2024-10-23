//? 93


// let todos = [];
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

document.addEventListener('DOMContentLoaded', (e) => {
  const todos = getAllTodos()
  createTodos(todos)
})


function addTodo(e) {
  e.preventDefault();
  const newTodo = {
    id: Date.now(),
    title: todoInput.value,
    createdAt: new Date().toISOString(),
    isCompleted: false,
  };
  // todos.push(newTodo);
  saveTodo(newTodo)
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
  const todos = getAllTodos()
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
  let todos = getAllTodos()
  
  const todoId = Number(e.target.dataset.todoId);
  todos = todos.filter((todo) => todo.id !== todoId);
  saveAllTodos(todos)
  filterTodos();
}

//? 403/8/2
//? start: 97, end: 
//! check todo
function checkTodo(e) {
  let todos = getAllTodos();

  const todoId = Number(e.target.dataset.todoId);
  todos = todos.find((t) => t.id === todoId);
  todos.isCompleted = !todos.isCompleted
  saveAllTodos(todos)
  filterTodos()
}

//? localStorage => web API
function getAllTodos () {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
  return savedTodos
}

function saveTodo(todo) {
  const savedTodos = getAllTodos()
  savedTodos.push(todo)
  localStorage.setItem('todos', JSON.stringify(savedTodos))
  return savedTodos
}
function saveAllTodos(todo) {
  localStorage.setItem("todos", JSON.stringify(todo));
}