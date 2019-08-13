document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', handleFormSubmit);
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
  const newLI = document.createElement('li')
  newLI.innerText = userInputValue();
  taskList.append(newLI);
}