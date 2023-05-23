
document.getElementById("task-form").addEventListener("submit", function(event){
    event.preventDefault() // Prevents form submission from refreshing page
  
  
  // Get the task input value 
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();
  
  if(taskText !== ""){
    // Add the task to the task list
    addTask(taskText);
  
    // Clear the task input field
    taskInput.value = ""
  }
  })
  
  function addTask(taskText){
    // create a new task item
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
  
    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskItem.appendChild(checkbox);
  
    // Create the task description
    const taskDescription = document.createElement("span");
    taskDescription.classList.add("task-description");
    taskDescription.textContent = taskText;
    taskItem.appendChild(taskDescription);
  
    // Append the task item to the task list
    const taskList = document.getElementById("task-list");
    taskList.appendChild(taskItem)
  }
  