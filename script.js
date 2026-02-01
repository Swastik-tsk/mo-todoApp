// console.log('JS connected Successfully✅')

const todoForm = document.querySelector('#todo-maker')
const container = document.querySelector('#container')
const todo = document.querySelector('#todo-input')

let tasks = []

const addTask = (task)=>{
        tasks.push(task)
}

todoForm.addEventListener('submit',(e)=>{  e.preventDefault()
    
    console.log(todo.value)
    
    addTask(todo.value)
    renderTasks()
    
    todo.value =  ''
})

function renderTasks(){
    container.innerHTML = ''

    tasks.forEach((element, index)=>{
        container.innerHTML += `
        <div class="card">
            <input type="checkbox" id="task">
            <label for="task">${element}</label>
        </div>
    `
    })
}

const checkbox = document.querySelector('#task')

