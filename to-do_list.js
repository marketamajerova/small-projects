console.log('funguju');

let containerTasks = document.getElementById('container-tasks');
let input = document.querySelector('input');
let button = document.querySelector('button');

function addTask(){
    let taskText = input.value;
    let task = document.createElement('li');
    task.innerText = taskText;
    containerTasks.appendChild(task);
}
