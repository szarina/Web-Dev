const form = document.querySelector('form');
const taskInput = document.querySelector('.to-do-input');
const tasksList = document.querySelector('.to-do-list')


//то событие которые мы хотим отследить +функция которая произойдет после
//ивент содержит всю информацию о  том что произошло
form.addEventListener('submit',function(event){
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
    <button type="button" data-action="delete" class="btn-action ">
        <img src="delete.png" alt="Done" width="18" height="18">
    </button>
    </div>
    </li>   `

    tasksList.insertAdjacentHTML('beforeend',taskHTML)
})