document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault()

    const input = document.getElementById("new-task-description").value // grab input
    const li = document.createElement("LI") // create li
    const text = document.createTextNode(input) // set up text and button

    const button = document.createElement("button")
    button.innerHTML = "X"
    button.addEventListener('click', function(event){
      li.remove()
    })

    // for editing tasks - works but is kind of janky
    li.addEventListener('click', function(event){
      document.getElementById("new-task-description").value = li.innerText.slice(0,-1)
      li.remove()
    })

    li.appendChild(text) // add text and button to li
    li.appendChild(button)
    document.getElementById("tasks").appendChild(li); // append li
    document.getElementById("create-task-form").reset() // clear form
  });


});
