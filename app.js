const todoInput=document.getElementById("todo");
const form=document.querySelector("#todo-form");

form.addEventListener("submit",addTodo);

function addTodo(e){
    
    
    let todos;

    if(localStorage.getItem("todos")===null){
    todos=[];
    }
    else{
    todos=JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todoInput.value);

    localStorage.setItem("todos",JSON.stringify(todos));
    
    
    







    e.preventDefault();
}