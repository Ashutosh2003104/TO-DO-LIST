// Select Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to Add Task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Task cannot be empty!');
        return;
    }

    // Create Task Item
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    // Task Content
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Append Elements
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear Input
    taskInput.value = '';
}

// Add Task on Button Click
addTaskBtn.addEventListener('click', addTask);

// Add Task on Enter Key Press
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
