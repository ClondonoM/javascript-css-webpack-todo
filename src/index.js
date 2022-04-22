import "./styles.css";
import { Todo, TodoList } from "./classes";

const todoList = new TodoList();

const task = new Todo("Learn JS");

todoList.newTodo(task);

console.log(todoList);
