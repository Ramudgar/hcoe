// // script.js



// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get elements from the HTML
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // When the "Add" button is clicked
    addTaskBtn.addEventListener('click', () => {
        // Get the text from the input
        const taskText = taskInput.value;

        // Check if the input is not empty
        if (taskText) {
            // Create a new list item
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a "Delete" button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'deleteBtn';
            
            // Add the delete button to the list item
            li.appendChild(deleteBtn);

            // Add the new list item to the task list
            taskList.appendChild(li);

            // Clear the input
            taskInput.value = '';
        }
    });

    // When a list item or its delete button is clicked
    taskList.addEventListener('click', (e) => {
        const target = e.target;
        
        // Check if the delete button was clicked
        if (target.className === 'deleteBtn') {
            // Remove the task (li element)
            taskList.removeChild(target.parentElement);
        } 
        // Check if a list item was clicked
        else if (target.tagName === 'LI') {
            // Toggle the "completed" class
            target.classList.toggle('completed');
        }
    });
});



// document.addEventListener('DOMContentLoaded', () => {
//     const taskInput = document.getElementById('taskInput');
//     const addTaskBtn = document.getElementById('addTaskBtn');
//     const taskList = document.getElementById('taskList');

//     addTaskBtn.addEventListener('click', addTask);

//     taskList.addEventListener('click', (e) => {
//         if (e.target.classList.contains('deleteBtn')) {
//             deleteTask(e.target.parentElement);
//         } else if (e.target.tagName === 'LI') {
//             toggleComplete(e.target);
//         }
//     });

//     function addTask() {
//         const taskText = taskInput.value.trim();
//         if (taskText !== '') {
//             const li = document.createElement('li');
//             li.textContent = taskText;

//             const deleteBtn = document.createElement('button');
//             deleteBtn.textContent = 'Delete';
//             deleteBtn.classList.add('deleteBtn');
//             li.appendChild(deleteBtn);

//             taskList.appendChild(li);
//             taskInput.value = '';
//         }
//     }

//     function deleteTask(task) {
//         task.remove();
//     }

//     function toggleComplete(task) {
//         task.classList.toggle('completed');
//     }
// });
