/*
Users should be able to:

- Filter by all/active/complete todos

- Clear all completed todos / must do filter 1st

 -we cant remove/toggle the checkmark, linear gradient and strickthrough if
 we change our mind and not want to mark as complete 

- **Bonus**: Drag and drop to reorder items on the list
*/
const body = document.querySelector("body");
const mainListContainer = body.querySelector(".main-list-container");
const dynamicTodoContainer = body.querySelector(".dynamic-todo-container");
const input = body.querySelector("input");
const moonSunContainer = body.querySelector(".moon-sun-container");
const moon = body.querySelector(".moon");
const itemsLeftDisplay = body.querySelector(".items-left");

let count = "0";
let todoItemsArray = [];

//FUNCTIONS
const addToDo = () => {
  const div = document.createElement("div");
  div.setAttribute("class", "list-container");
  div.innerHTML = `<div class="list-left">
            <div class="checkbox-container">
                <img src="images/icon-check-dark-theme.svg" alt="" class="checkbox checkbox-dark"/>
                 <img src="images/icon-check.svg" alt="" class="checkbox checkbox-light"/>
            </div>
            <p class="todo-p">${input.value}</p>
          </div>
          <div ><img src="images/icon-cross.svg" alt="" class="delete-x"/></div>`;

  count++;
  todoItemsArray.push(div);

  if (count <= 0) {
    itemsLeftDisplay.textContent = "0 items left";
  } else if (count === 1) {
    itemsLeftDisplay.textContent = `${count} item left`;
  } else {
    itemsLeftDisplay.textContent = `${count} items left`;
  }

  return div;
};

//EVENT LISTENERS

window.addEventListener("DOMContentLoaded", () => {
  itemsLeftDisplay.textContent = "0 items left";
});

mainListContainer.addEventListener("click", (e) => {
  const checkboxClicked = e.target.classList.contains("checkbox");
  //and 3 elements contain checkbox
  const deleteXClicked = e.target.classList.contains("delete-x");
  const allClicked = e.target.classList.contains("all");
  const activeClicked = e.target.classList.contains("active");
  const completedClicked = e.target.classList.contains("completed");
  console.log({ allClicked, activeClicked, completedClicked });
  const clearCompletedClicked = e.target.classList.contains("clear-completed");

  if (checkboxClicked) {
    const checkboxDark = e.target;
    const checkboxLight = e.target.nextElementSibling;
    const todoP = e.target.parentElement.nextElementSibling;
    console.log(checkboxDark);
    console.log(checkboxLight);
    console.log(todoP);

    checkboxLight.classList.toggle("checked"); /*so this had to be on the 
    checkboxLight and NOT the e.target - I FINALLY FOUND AND FIXED it */
    //BUT NOW TOGGLE IS NOT WORKING ????? yet it was before when I had it on
    //e.target which was the checkboxDark ?
    //but the striketrhough and lightened text color was not toggling then
    //either as it was not set up as toggle - how to do this??
    //set them up in css on the checkboxLight ??? No can't do that

    //I had to click it twice to get the linear g
    //which means we must click on the checkbox light to get this NOT
    //checkbox dark which is what we are clicking on first b/c it
    //appears first BUT it has the white checkmark in it which we don't
    //want on the dark theme until we click the checkbox

    /*These 2 do work but how to get them to toggle??*/
    todoP.style.textDecoration = "line-through";
    todoP.style.color = "hsl(236, 9%, 61%)";
    /* todoP.classList.toggle("active"); //this is NOT WORKING*/
    checkboxLight.style.visibility = "visible"; //this was giving me trouble
    checkboxDark.style.visibility = "hidden";
  }

  if (deleteXClicked) {
    const addToDoContainer = e.target.closest(".list-container");
    addToDoContainer.remove();

    count--;
    if (count === 1) {
      itemsLeftDisplay.textContent = `${count} item left`;
    } else {
      itemsLeftDisplay.textContent = `${count} items left`;
    }
  }
  const all = document.querySelector(".all");
  const active = document.querySelector(".active");
  const completed = document.querySelector(".completed");

  if (allClicked) {
    //if another one is royalBlue remove it first
    active.classList.remove("filter-color");
    completed.classList.remove("filter-color");
    all.classList.add("filter-color");
  }

  if (activeClicked) {
    //just the ones without the checkboxClicked
    if (!checkboxClicked) {
      console.log(checkboxClicked);
    }
    all.classList.remove("filter-color");
    completed.classList.remove("filter-color");
    active.classList.add("filter-color");
  }

  if (completedClicked) {
    all.classList.remove("filter-color");
    active.classList.remove("filter-color");
    completed.classList.add("filter-color");
  }

  if (clearCompletedClicked) {
    console.log("clear just the ones with checkbox clicked");
    //this is not working ???
    if (checkboxClicked) {
      addToDoContainer.remove();
    }
  }
});

moon.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    moon.src = "./images/icon-sun.svg";
  } else {
    moon.src = "./images/icon-moon.svg";
  }
});

document.form.addEventListener("submit", (e) => {
  e.preventDefault();
  dynamicTodoContainer.appendChild(addToDo());
  input.value = "";
});

//I need this do to the filter part
console.log(todoItemsArray);
