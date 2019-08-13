// *** BASIC WORKING SOLUTION ***

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', handleFormSubmit);
  deleteButtonListener()
});

const userInputValue = () => {
  return document.querySelector('#new-task-description').value
}

const handleFormSubmit = event => {
  event.preventDefault();
  addNewLI();
}

const addNewLI = () => {
  const taskList = document.querySelector('ul#tasks')
  const newTaskItem = new TaskItem(userInputValue())
  taskList.innerHTML += newTaskItem.render();
}

const deleteButtonListener = () => {
  document.querySelector('ul#tasks').addEventListener('click', deleteTaskItem)
}

const deleteTaskItem = event => {
  if(event.target.innerHTML === "X") {
    event.target.parentElement.remove()
  }
}

// *** END BASIC SOLUTION ***

