document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("#create-task-form");
    let input = document.querySelector("#new-task-input");
    let tasks = document.querySelector("#tasks");
    let buttonsList = [];
    let id = 1;


    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value.trim() != "") {
            tasks.innerHTML += `
            <li id="${input.value}_${id}">
            ${input.value}
            <button id="delete-button">X</button>
            </li>
            `;

            input.value = "";
            let button = document.querySelector(`#delete-button`);
            buttonsList.push(button);

            id += 1;

        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.id == "delete-button") {
            event.target.parentElement.remove();
        }
    })


});