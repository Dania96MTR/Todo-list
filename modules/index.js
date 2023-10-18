import {
    getProductsFromLocalStorage,
    addProductToLocalStorage,
    updateProductToLocalStorage,
    deleteProductFromLocalStorage,
    setProductsToLocalStorage
} from "./local-storage.js"



const todoList = document.querySelector(".todo-list")
const form = document.querySelector("form")
const Input = document.querySelector("input")
const Create = document.querySelector(".create")
const All = document.querySelector(".all")
const todo = document.querySelector(".todo")
const completed = document.querySelector(".completed")
const ul = document.querySelector("ul")
const line = document.querySelector(".active")


const inputValue = Input.value






let tasks = getProductsFromLocalStorage()
if (getProductsFromLocalStorage()) {
    tasks.map(task => {
        addTask(task)
    })
}

form.addEventListener("click", (e) => {
    e.preventDefault()
    const inputValue = Input.value
    if (inputValue === '') {
        return
    }
    const today = new Date()
    const result = today.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const task = {
        id: Date.now(),
        title: inputValue,
        completed: false,
        createdAt: `${result}.${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,

    }
    tasks.push(task)
    addProductToLocalStorage(task)
    addTask(task)
})

function addTask(task) {
    let li = document.createElement("li")
    li.setAttribute('id', task.id)

    li.innerHTML = task.title
    li.setAttribute('class', 'task')
    let span = document.createElement("span")
    span.setAttribute('class', 'check')
    if(task.completed){
        span.className = "check circle"
    }
    li.appendChild(span)
    let div = document.createElement("div")
    div.innerHTML = `<span>${task.createdAt}</span>`
    li.appendChild(div)
    ul.appendChild(li)
    Input.value = ""
}
const today = new Date()
    const result = today.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
    const task = {
        id: Date.now(),
        title: inputValue,
        completed: false,
        createdAt: `${result}.${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,

    }
ul.addEventListener("click" , (e) => {
    const hasClass = e.target.classList.contains("check")
        if(hasClass){
            const update = parseInt(e.target.parentElement.getAttribute("id"))
            updated(update)
            e.target.classList.toggle('circle')
            
        }
        
})
function updated(taskid){
    for(let i = 0; i< tasks.length ; i++){
        if(tasks[i].id == taskid){
            tasks[i].completed == false ? (tasks[i].completed = true) : (tasks[i].completed = false)

        }
    }
    setProductsToLocalStorage(tasks)
    

}

