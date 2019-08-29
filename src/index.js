document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', add)
  document.querySelector('#tasks').addEventListener('click', remove)
});

const add = e => {
  e.preventDefault()

  let newTask = document.getElementById('new-task-description').value
  let li = `<li>${newTask}<button>X</button></li>`

  document.querySelector('#tasks').innerHTML += li
  document.querySelector('#new-task-description').value = ''
}

const remove = e => {
  e.target.parentElement.remove()
}