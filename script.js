document.getElementsByClassName('addBtn')[0].onclick = () => {
    if (document.getElementsByClassName('searchBar')[0].value.length == 0) {
        alert("Please enter a task");
    } else {
        // Add new task to the task list
        document.querySelector('.tasks').innerHTML += `
            <div class='task'>
                <div class='taskname'>
                    ${document.querySelector('.searchBar').value}
                </div>
                <button class='deleteBtn'>Delete</button>
            </div>
        `;
        
        // Clear the search bar after adding the task
        document.querySelector('.searchBar').value = '';

        // Set up event listeners for delete buttons and task completion toggle
        setUpEventListeners();
    }
};

// Function to set up event listeners for delete buttons and task completion
function setUpEventListeners() {
   var deleteButtons = document.querySelectorAll('.deleteBtn');
   for(var i=0; i<deleteButtons.length; i++) {
    deleteButtons[i].onclick = function() {
        this.parentNode.remove();               // 'parentNode' is used to refer to the parent element, in this case, '.task'

    }
   }

   var task = document.querySelectorAll('.task');
   for(var i=0; i<task.length; i++) {
    task[i].onclick = function() {
        this.classList.toggle('completed');     // toggle is used to remove or add class at the time of event
    }
   }
}

