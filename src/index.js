document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")

  const addFormListener = e => {
    e.preventDefault();
    let taskList = document.querySelector("#tasks")
    let item = document.createElement("li");
    item.id = guidGenerator()
    let newListItem = document.querySelector("#new-task-description")
    item.innerHTML +=  `${newListItem.value} <button onClick=handleClick("${item.id}")>X</button>`
    taskList.prepend(item)
    newListItem.value = ""
  }

  form.addEventListener("submit", addFormListener);

})

function handleClick(id) {
  let listItem = document.getElementById(id);
  listItem.remove()
}

function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}