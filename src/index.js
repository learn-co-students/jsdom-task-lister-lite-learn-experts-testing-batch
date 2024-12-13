document.addEventListener("DOMContentLoaded", () => {
  submit = document.querySelector("form").lastElementChild;
  submit.addEventListener("click", (event) => {
    console.log('hello');
    event.preventDefault();
    input = document.querySelector('#new-task-description').value;
    li = document.createElement("li");
    li.innerText = input;
    list = document.querySelector('#tasks').appendChild(li);
  });
});
