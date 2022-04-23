import "./styles.css";
import { Todo, TodoList } from "./classes";
import { createTodoHtml } from "./js/components";

export const todoList = new TodoList();

const task = new Todo("Learn JS ");

todoList.newTodo(task);

console.log(todoList);

createTodoHtml(task);
