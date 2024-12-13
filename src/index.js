document.addEventListener("DOMContentLoaded", () => {

  const onSubmit = event => {
    event.preventDefault();
    //wasn't hitting console.log b/c needed to refresh page
    addTask();
  }

  function addTask() {
    let task = document.querySelector("#new-task-description").value; //where submitted text is written
    let tasks = document.querySelector("#tasks") //where we want to put the text
    let newLi = document.createElement("li"); //make new li
    newLi.innerText = task
    tasks.append(newLi)
  }

  document.querySelector('#create-task-form').addEventListener('submit', onSubmit);



});
