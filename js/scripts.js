// Seleção de elementos

const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const editForm = document.querySelector("#edit-form")
const editInput = document.querySelector("#edit-input")
const cancelEditBtn = document.querySelector("#cancel-edit-btn")
let oldInputValue;
let text = []
// text = JSON.parse(localStorage.getItem('lista_tarefas'))





// Functions

const saveTodo = (Text) => {
  const todo = document.createElement("div")
  todo.classList.add("todo")

  const todoTitle = document.createElement("h3")
  todoTitle.innerText = Text

  todo.appendChild(todoTitle)

  console.log(todo)

// doneBtn
  const doneBtn = document.createElement("button")
  doneBtn.classList.add("finish-todo")
  // innerHTML para colocar os icones
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
  todo.appendChild(doneBtn)

// editBtn
  const editBtn = document.createElement("button")
  editBtn.classList.add("edit-todo")
  // innerHTML para colocar os icones
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn)

// deleteBtn
  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("remove-todo")
  // innerHTML para colocar os icones
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(deleteBtn)

  todoList.appendChild(todo)

  todoInput.value = ""
  todoInput.focus()
}

const toggleForms = () => {
  editForm.classList.toggle("hide")
  todoForm.classList.toggle("hide")
  todoList.classList.toggle("hide")
}

const updateTodo = (Text) => {
  const all = document.querySelectorAll(".todo")

  all.forEach((todo) => {
    let todoTitle = todo.querySelector("h3")

    if(todoTitle.innerText === oldInputValue){
      todoTitle.innerText = Text
    }
    
  })

}

// const localStorageSave = () => {
//   const localStorageTodo = querySelectorAll(".todo")
//   localStorage.setItem("todoSave") = localStorageTodo
// }


function saveLocalStorage(text)  {
  text = document.querySelectorAll(".todo")

  text.forEach((todo) => {
    let todoTitle = todo.querySelector("h3")

    text =  todoTitle.innerText 
    console.log(text)
    
  })

  
  localStorage.setItem('lista_tarefas', JSON.stringify(text))
  
}






// Events
todoForm.addEventListener("submit", (e) => {

 e.preventDefault()
 const inputValue = todoInput.value

 if(inputValue ) {
  saveTodo(inputValue)
  
    // save todo
 }

})

document.addEventListener("click", (e) => {

  const targetEl = e.target
  // pega a div pai do elemento em questão
  const parentEl = targetEl.closest("div")
  let todoTitle;

  if(parentEl && parentEl.querySelector("h3")) {
    todoTitle = parentEl.querySelector("h3").innerText

  }

  if(targetEl.classList.contains("finish-todo")) {
    // faz a troca
    // se ja tiver a classe ele a tira e se não tiver ele a adiciona "toggle"
    parentEl.classList.toggle("done")
    saveLocalStorage()
  }

  if(targetEl.classList.contains("remove-todo")) {
    parentEl.remove()
    saveLocalStorage()
  }
  
  if(targetEl.classList.contains("edit-todo")) {
    toggleForms()
    editInput.value = todoTitle
    oldInputValue = todoTitle
    saveLocalStorage()
  }

})

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault()

  toggleForms()
  
})

editForm.addEventListener("submit", (e) => {

e.preventDefault()

const editInputValue = editInput.value 

if(editInputValue) {
  updateTodo(editInputValue)
}

  toggleForms()
  saveLocalStorage()
  

})





