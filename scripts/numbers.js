const completeButton = document.querySelectorAll('#card-1, #card-2, #card-3, #card-4, #card-5, #card-6');
completeButton.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        button.disabled = true;
        const taskComplete = document.getElementById('task-completed').innerText;
        const convertedTaskComplete = parseInt(taskComplete);
        const newCompleteTask = convertedTaskComplete + 1;
        document.getElementById('task-completed').innerText = newCompleteTask;
        const taskAssigned = document.getElementById('task-assigned').innerText;
        const convertedTaskAssigned = parseInt(taskAssigned);
        const taskUncompleted = convertedTaskAssigned - 1;
        document.getElementById('task-assigned').innerText = taskUncompleted;
        if (taskUncompleted === 0) {
            alert('Congratulation on completing all task!');
        }
        else {
            alert('Keep up the good work.')
        }
        const tasks = Array.from(document.querySelectorAll('#task-1, #task-2, #task-3, #task-4, #task-5,#task-6')).map(t => t.innerText).join(', ');
        const taskName = button.dataset.task || button.innerText;
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        const Activities = document.getElementById('activity');
        const newLi = document.createElement('li');
        newLi.innerText = `You have completed the task ${taskName} at ${timeString}`;
        newLi.style.marginBottom = '3px';
        newLi.classList.add('bg-blue-50', 'p-1', 'rounded', 'mb-2');
        Activities.appendChild(newLi);
    });
})

const clearHistory = document.getElementById('clear-history').addEventListener('click',function(){
    const history = document.getElementById('activity');
    history.innerHTML = ''; 
})
