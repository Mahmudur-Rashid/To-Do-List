const userInput = document.querySelector(".user-input");
const submit = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");

submit.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOption)

function addTodo(event){
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("list-container");
    const listItem = document.createElement("li");
    listItem.innerText = userInput.value;
    listItem.classList.add("list-item");
    todoDiv.appendChild(listItem);
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add("remove-btn");
    deleteButton.innerText = "delete";
    todoDiv.appendChild(deleteButton);
    (listItem.innerText === "") ? todoList.removeChild(todoDiv) : todoList.appendChild(todoDiv); 
    userInput.value = "";
}

function deleteOption(e){
    const item = e.target;
    if(item.classList[0] === "remove-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
};