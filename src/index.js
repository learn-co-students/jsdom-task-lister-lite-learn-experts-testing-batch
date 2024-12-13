document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.addEventListener("submit", function(event) {
    event.preventDefault();
    handleSubmit();
  })

  function handleSubmit() {
    const inputField = document.getElementById('new-task-description');
    const newTask = inputField.value;
    displayTask(newTask);
    inputField.value = '';
  }

  function displayTask(newTask) {
    const li = document.createElement("li");
    li.innerHTML = newTask;
    const button = document.createElement("button");
    button.innerHTML = "X";
    button.setAttribute("data-description", newTask);
    button.style="margin-left: 5px; font-size: 12px;";
    li.appendChild(button);
    document.getElementById('tasks').appendChild(li);
  }

  document.addEventListener("click", function(event) {
    const task = event.srcElement.getAttribute("data-description");
    const listElements = document.querySelectorAll('li');
    for (let li of listElements) {
      if (li.innerText.includes(task)) {
        li.remove();
      }
    }
  })

});

