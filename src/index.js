document.addEventListener("DOMContentLoaded", () => {
  const formTask = document.querySelector('form#create-task-form')
  const newTaskDisc = document.querySelector('input#new-task-description')
  const todosList = document.querySelector('ul#tasks')
  const submitButton = document.querySelector('input[type="submit"]')

  const dateLable = document.createElement('lable')
  dateLable.textContent = 'Due Date: '
  const dueDate = document.createElement('input')
  dueDate.setAttribute('type', 'date')
  dueDate.id = 'Due-Date'//classList.add("Due-Date")
  // formTask.appendC(dueDate)  f
  formTask.insertBefore(dateLable, submitButton)
  formTask.insertBefore(dueDate, submitButton)



  formTask.addEventListener('submit', function (event){
    event.preventDefault()

    const deleteButton = document.createElement('button')
    deleteButton.classList.add("Delete-Button")
    deleteButton.innerText = "Delete"

    const editButton = document.createElement('button')
    editButton.classList.add("Edit-Button")
    editButton.innerText = "Edit"

    // console.log(newTaskDisc.value)
    
    const newLi = document.createElement('li')

    const newP = document.createElement('p')
    newP.innerText = newTaskDisc.value

    const dueD = document.createElement('date')
    dueD.innerText  = dueDate.value

    todosList.append(newLi)
    newLi.append(newP)
    newLi.append(dueD)

    newLi.append(deleteButton)
    newLi.append(editButton)

    event.target.reset()
    
  }  )




});
