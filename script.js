
document.getElementById('addBtn').addEventListener('click', function() {

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); 


    if (taskText === '') {
        alert('Please enter a task.');
        return; 
    }

    
    addTask(taskText);


    taskInput.value = '';
});


function addTask(text) {
    const taskList = document.getElementById('taskList');
    const newRow = document.createElement('tr'); 

    
    newRow.innerHTML = `
        <td><input type="checkbox" class="done"></td>
        <td>${text}</td>
        <td><button class="deleteBtn">Delete</button></td>
        <td><button class="editBtn">Edit</button></td>
    `;


    taskList.appendChild(newRow);


    const checkbox = newRow.querySelector('.done');


    checkbox.addEventListener('change', function() {
        if (this.checked) {
        
            this.parentNode.parentNode.style.textDecoration = 'line-through';
            this.parentNode.parentNode.style.opacity = '0.6';
        } else {
    
            this.parentNode.parentNode.style.textDecoration = 'none';
            this.parentNode.parentNode.style.opacity = '1';
        }
    });
}


document.getElementById('taskList').addEventListener('click', function(event) {

    if (event.target.classList.contains('deleteBtn')) {
        const row = event.target.parentNode.parentNode; 
        if (confirm('Are you sure you want to delete this task?')) {
            row.remove(); 
        }
    } else if (event.target.classList.contains('editBtn')) {
        const row = event.target.parentNode.parentNode; 
        const taskCell = row.children[1]; 
        const currentText = taskCell.textContent; 
        const newText = prompt('Enter the new task:', currentText); 
        if (newText !== null) {
            taskCell.textContent = newText; 
        }
    }
});
