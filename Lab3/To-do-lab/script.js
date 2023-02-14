const form = document.querySelector('form');
const taskInput = document.querySelector('.to-do-input');
const tasksList = document.querySelector('.to-do-list')


//1.Adding a task
//то событие которые мы хотим отследить +функция которая произойдет после
//ивент содержит всю информацию о  том что произошло
form.addEventListener('submit',addTask);

function addTask(event){
    //после формы страница авто обновляется и тут я это убираю и также 
    //отменяется отправка формы
    event.preventDefault();
    
    //text from input
    const taskText = taskInput.value;

    
   
    //Adding new list item
    const taskHTML = `<li class="list-items">
    <div class="task">
    <button type="button" data-action="done" class="btn-action " >
        <img src="tick.png" alt="Done" width="18" height="18">
    </button>
    <span class="text">${taskText}</span>
    <button type="button" data-action="delete" class="btn-action del">
        <img src="delete.png" alt="Done" width="18" height="18">
    </button>
    </div>
    </li>   `

    //Adds new item
    tasksList.insertAdjacentHTML('beforeend',taskHTML);

    //Clearing prev input
    taskInput.value ="" 
    //Focus
    taskInput.focus()

}


//2.Deleting the task

tasksList.addEventListener('click',deleteTask);

function deleteTask(event){
    //data-action="delete"
    if(event.target.dataset.action=="delete"){
        //console.log('delete!')

        const parent= event.target.closest('.list-items');

        parent.remove();
    }
}