// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  event.preventDefault();

  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create li element
  const newTodo = document.createElement("li");
  newTodo.className = "todo-item";

  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.className = "complete-btn";
  todoDiv.appendChild(completedButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  todoList.appendChild(todoDiv);

  // Clear input
  todoInput.value = "";
}
