//html references
const divTodoList = document.querySelector(".todo-list");

export const createTodoHtml = (todo) => {
  const htmlTodo = `
          <li class="completed" data-id="abc">
						<div class="view">
							<input class="toggle" type="checkbox" checked>
							<label>${todo.task}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>`;

  const div = document.createElement("div");
  div.innerHTML = htmlTodo;
  divTodoList.append(div);
  return div;
};
