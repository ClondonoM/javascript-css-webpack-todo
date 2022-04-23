import { Todo } from "../classes";
import { todoList } from "../index";

//html references

const divTodoList = document.querySelector(".todo-list");
const txtInput = document.querySelector(".new-todo");

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

txtInput.addEventListener("keyup", (evnt) => {
  if (evnt.keyCode === 13 && txtInput.value.length > 0) {
    //13 -> enter key
    const newTodo = new Todo(txtInput.value);
    todoList.newTodo(newTodo);
    console.log(todoList);

    createTodoHtml(newTodo);
    txtInput.value = "";
  }
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
  console.log(todoList);
});
