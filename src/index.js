// document.addEventListener("DOMContentLoaded", () => {
// });

const main = document.querySelector("#main-content")
console.log(main)

  //1. get the form - this allows the task string to be listed in the DOM
const createForm = document.querySelector("#create-task-form");

  //4. grab each task
const indiviTask = document.querySelector("#tasks")

  //2. Adding event listener to the form 
createForm.addEventListener("submit", function(e){
  e.preventDefault() //so that the page doesn't reload after submit button is clicked
  console.log(e.target)

  //3. ensuring that we add whatever is typed in onto the page 
  //3a. grabbing input field 
const taskDescription = document.querySelector("#new-task-description").value
  //.value -> simply gives you the value (item entered)

  //5. create itemized tasks
const eachTask = document.createElement("li")
eachTask.innerText = taskDescription

  //6. append it on webpage/DOM
indiviTask.appendChild(eachTask);

//okay so now we should have a list BUT you will notice that the box in which the items 
//were entered did not reset. You want to clear that. 
createForm.reset()
})
