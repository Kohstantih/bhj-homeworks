const card = document.querySelector('.card');
const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');

const arr = [];

if(sessionStorage['task']) {    
    arr.push(...JSON.parse(sessionStorage.getItem('task')))    
    
    arr.forEach(element => {
        let div = document.createElement('div');
        card.appendChild(div);   
        div.outerHTML = element;      
    });
    
    const taskHistoryBox = document.querySelectorAll('.task');

    taskHistoryBox.forEach(el => el.addEventListener('click', remove));
};    

document.forms[0].addEventListener('keyup', addToDo);
btn.addEventListener('click', addToDo);

function addToDo(e) {
    if ((e.keyCode === 13 || e.currentTarget == btn) && input.value.trim().length > 0) {
        e.preventDefault();
        const task = document.createElement('div');
        task.classList.add('task');
        card.appendChild(task);

        const taskTitle = document.createElement('div');
        taskTitle.classList.add('task__title');
        taskTitle.textContent = input.value;
        task.appendChild(taskTitle);

        const taskRemove = document.createElement('a');
        taskRemove.setAttribute('href', '#')
        taskRemove.innerHTML = '&times;'
        taskRemove.classList.add('task__remove');
        task.appendChild(taskRemove);

        task.addEventListener('click', remove);

        document.forms[0].reset();        

        arr.push(task.outerHTML);
        
        sessionStorage.setItem('task', JSON.stringify(arr));
    };
 };

 function remove(e) {
    if(e.target.classList.contains('task__remove')) e.currentTarget.remove(); 

            for(let i = 0; i < arr.length; i++) {
                if(arr[i] === e.currentTarget.outerHTML) arr.splice(i, 1);
            };

            sessionStorage.clear();
            sessionStorage.setItem('task', JSON.stringify(arr));                        
    };