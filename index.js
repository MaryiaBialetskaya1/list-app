//get access to input field
const inputField = document.querySelector(".input-field");
//get access to button
const btn = document.querySelector(".btn");
//get access to list
const toDoContainer = document.querySelector(".todo-container");


//add event listener to button
btn.addEventListener("click", () => {
    const listItem = document.createElement("li"); //create li element
    listItem.innerText = inputField.value; //get access to input field - what is written by the user
    listItem.classList.add("todo__list_added"); //add class to element
    toDoContainer.appendChild(listItem); //append li to ul
    inputField.value = ''; //clean input field after added li item to list
    console.log(listItem);

    //function to change style if item is completed
    listItem.addEventListener("click", () => {
        listItem.classList.add("todo__list_completed");
    });


    //function to delete item using two clicks
    listItem.addEventListener("dblclick", () => {
        toDoContainer.removeChild(listItem);
    });
})


