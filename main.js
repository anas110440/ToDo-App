/*
    Students Tasks:
    [1] Use Sweet Alert If Input Is Empty - done
    [2] Check If Task Is Exist
    [3] Create Delete All Tasks Button
    [4] Create Finish All Tasks Button
    [5] Add To Tasks To The Local Storage
*/

//  Setting Up Variables
let theInput = document.querySelector(".add-task input"),
    theButton =  document.querySelector(".add-task .plus"),
    taskContainer =  document.querySelector(".tasks-content"),
    taskCount =  document.querySelector(".task-count span"),
    taskCompleted =  document.querySelector(".task-completed span");

// Function Add Task
function addTask(){
       // if input Is Empty
       if(theInput.value === ""){
        swal("The Filed Is Empty ");


    }else{
        

        let noTaskMsg =  document.querySelector(".no-tasks-message");

        // Check If Span With No Tasks Message Is Exist

        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

            // Remove No Tasks Message
            noTaskMsg.remove();

            }

        // Create Span Element
        let mainSpan = document.createElement("span");

        // Create Delete Element
        let deleteBtn = document.createElement("span");

        // Create The Span Text
        let textSpan = document.createTextNode(theInput.value);

        
        // Create The Delete Text
        let textDelete = document.createTextNode("Delete");

        //  Append Child
        mainSpan.appendChild(textSpan);

        deleteBtn.appendChild(textDelete);
        
        mainSpan.appendChild(deleteBtn);

        // Add To Local Storage

        let task1 = localStorage.setItem("task", mainSpan);

        // Add Class
        mainSpan.className ="task-box";
        deleteBtn.className = "delete"

        // Add The Task To Container
        taskContainer.appendChild(mainSpan)

        // Empty The Input

        theInput.value = ""; 
        theInput.focus();
        calculateTasks();
        swal("Good job!", "The Task Is Added", "success");

    };
}

// Focus On Input Field
window.onload = ()=> theInput.focus();

// Adding The Taask
theButton.onclick = ()=>{
    addTask()
};

theInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        addTask()
    }
})

document.addEventListener("click", (e)=>{

    // Delete Task
    if(e.target.className == "delete"){
        e.target.parentNode.remove();

        if (taskContainer.childElementCount == 0) {

            createNoTasks();
            calculateTasks();
      
          }
    };

    // Finish Task
    if(e.target.classList.contains("task-box")){
        
        // Toggle Class Finished
        e.target.classList.toggle("finshed");
        calculateTasks()
    };
})

// Function To Create No Tasks Message
function createNoTasks() {

    // Create Message Span Element
    let msgSpan = document.createElement("span");

    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);

    // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';

    // Append The Message Span Element To The Task Container
    taskContainer.appendChild(msgSpan);

}

// Function To Calculate Tasks
function calculateTasks() {

    // Calculate All Tasks
    taskCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // Calculate Completed Tasks
    taskCompleted.innerHTML = document.querySelectorAll('.tasks-content .finshed').length;

}