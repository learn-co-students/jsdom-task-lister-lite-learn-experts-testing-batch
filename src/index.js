document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('create-task-form').addEventListener('submit', function(e){
    e.preventDefault();
    let listItem = document.createElement('li');
    let newTask  = document.getElementById("new-task-description").value;
    let taskDeleteButton = document.createElement('button');
    let space = document.createTextNode(" ");
    taskDeleteButton.innerText = 'X';
    taskDeleteButton.id = 'delete'
    taskDeleteButton.value = newTask
    
    taskDeleteButton.addEventListener('click', function(event) {
      let taskToDelete = event.toElement.value
      let taskList = document.getElementById('tasks')
      for(let i = 0; i < taskList.children.length; i++) {
       let taskLi = taskList.children[i]
       if(taskLi.childNodes[0].data === taskToDelete) {
         taskLi.remove()
       }
      }
    });
    
    listItem.innerHTML = newTask;
    listItem.append(space);
    listItem.append(taskDeleteButton);
    document.getElementById("tasks").appendChild(listItem);
    document.getElementById("new-task-description").value = ""
})
});
