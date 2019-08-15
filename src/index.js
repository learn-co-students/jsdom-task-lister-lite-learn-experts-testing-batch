document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")

  const createListItem = e => {
    e.preventDefault();
    let taskList = document.querySelector("#tasks")
    let item = document.createElement("li");
    let newItemValue = document.querySelector("#new-task-description")

    item.id = guidGenerator()
    item.innerHTML +=  `${newItemValue.value} <button onClick=handleClick("${item.id}")>X</button>`
    taskList.prepend(item)
    newItemValue.value = ""
  }

  form.addEventListener("submit", createListItem);

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

//Time spent 45min