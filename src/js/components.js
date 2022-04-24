import { Todo } from "../classes";
import { todoList } from "../index";

//html references

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");
const btnDelete = document.querySelector(".clear-completed");
const ulFilters = document.querySelector(".filters");
const ancFilters = document.querySelectorAll(".filter");
const todoCount = document.querySelector("#todoCount");

export const createTodoHtml = (todo) => {
  const htmlTodo = `
          <li class="${todo.completed ? "completed" : ""}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.completed ? "checked" : ""}>
							<label>${todo.task}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;

  divTodoList.append(div.firstElementChild);
  return div.firstElementChild;
};

// Events

const counterPendings = () => {
  let numPending = 0;

  for (const element of divTodoList.children) {
    element.classList.remove("hidden");
    const completed = element.classList.contains("completed");
    !completed ? (numPending += 1) : numPending;
    todoCount.innerText = numPending;
  }
};

txtInput.addEventListener("keyup", (evnt) => {
  if (evnt.keyCode === 13 && txtInput.value.length > 0) {
    //13 -> enter key
    const newTodo = new Todo(txtInput.value);
    todoList.newTodo(newTodo);

    createTodoHtml(newTodo);
    txtInput.value = "";
  }

  counterPendings();
});

divTodoList.addEventListener("click", (evnt) => {
  const nameElement = evnt.target.localName;
  const todoElement = evnt.target.parentElement.parentElement;
  const todoId = todoElement.getAttribute("data-id");

  if (nameElement.includes("input")) {
    todoList.toggleTodo(todoId);
    todoElement.classList.toggle("completed");
  } else if (nameElement.includes("button")) {
    todoList.deleteTodo(todoId);
    divTodoList.removeChild(todoElement);
  }

  counterPendings();
});

btnDelete.addEventListener("click", () => {
  todoList.deleteCompleted();
  for (let i = divTodoList.childNodes.length - 1; i >= 0; i--) {
    const element = divTodoList.childNodes[i];

    if (element.classList.contains("completed")) {
      divTodoList.removeChild(element);
    }
  }
});

ulFilters.addEventListener("click", (e) => {
  const filt = e.target.text;
  if (!filt) {
    return;
  }

  ancFilters.forEach((elem) => elem.classList.remove("selected"));
  e.target.classList.add("selected");

  let numPending = 0;

  for (const element of divTodoList.children) {
    element.classList.remove("hidden");
    const completed = element.classList.contains("completed");
    !completed ? (numPending += 1) : numPending;
    todoCount.innerText = numPending;

    switch (filt) {
      case "Pendings":
        if (completed) {
          element.classList.add("hidden");
        }
        break;

      case "Completed":
        if (!completed) {
          element.classList.add("hidden");
        }
        break;
    }
  }
});
