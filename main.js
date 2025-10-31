let submitButtom=document.getElementById("add-form");
let input=document.getElementById("text-task");
let tasks=document.querySelector(".tasks");

submitButtom.addEventListener("submit", function(e){
    e.preventDefault();
    if(input.value===""){
        alert("plase write the task");
        return;
    }

    let task=document.createElement("li");
    task.innerText = input.value;
    tasks.appendChild(task);
    input.value="";

});