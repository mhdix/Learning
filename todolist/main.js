//? 93
const todoInput = document.querySelector(".todo-input");
const submitBtn = document.querySelector(".todo-button");
const formTodo = document.querySelector(".todo-form");

const todoList = document.querySelector(".todoList");
const selectFilter = document.querySelector(".filter-todos");

// event
formTodo.addEventListener("submit", addTodo);
selectFilter.addEventListener("change", filterTodos);

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

  // create todo on DOM
  createTodos(todos);

  // filter todo 
  // filterTodos(todos)
}

//! create todos
function createTodos(todos) {
  let result = "";
  todos.forEach((todo) => {
    result += `
            <li class="todo">
                <p class="todo__title">${todo.title}</p>
                <span class="todo__createdAt">${new Date(
                  todo.createdAt
                ).toLocaleDateString("fa-IR")}</span>
                <button data-todo-id=${
                  todo.id
                }><i class="todo__check far fa-check-square"></i></button>
                <button data-todo-id=${
                  todo.id
                }><i class="todo__remove far fa-trash-alt"></i></button>
            </li>
  `;
});

  todoList.innerHTML = result;
  todoInput.value = "";
}

//! filter todos
function filterTodos(e) {
  // console.log(e.target.value)
  // console.log(e.target.value)
  const filter = e.target.value;
  console.log(filter)
  switch (filter) {
    case "all": {
      createTodos(todos);
      break;
    }
    case "completed": {
        const filteredTodos = todos.filter((todo) => {
        return todo.isCompleted
      });
      createTodos(filteredTodos);
      break;
    }
    case "uncompleted": {
      const filteredTodos = todos.filter((todo) => {
       return !todo.isCompleted
      })
      createTodos(filteredTodos)
      break;
    }
  }
}