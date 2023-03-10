// variables

const addTask = document.querySelector("#add-task");
const taskContainer = document.querySelector("#task-container");
const inputTask = document.querySelector("#input-task");

addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement('button');
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
      alert('Please Enter a Task');
    } else{
      taskContainer.appendChild(task);
    }

    inputTask.value = "";

      let checked = 'no';
    checkButton.addEventListener('click', function(){
      if(checked === 'no'){
      checkButton.parentElement.style.textDecoration ="line-through";
      checked = 'yes';
    }else{
      checkButton.parentElement.style.textDecoration = 'none';
      checked = 'no';
    }
  });

  deleteButton.addEventListener('click', function(){
    let target = this;

    target.parentElement.remove();
  })

})
