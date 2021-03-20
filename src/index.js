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

  // ----- Editing To-do list ----- //
  todosList.addEventListener('click', function (event){
    
    if (event.target.matches('button.Delete-Button')){
      // console.log('Button clicked')
      event.target.closest('li').remove()
    }
    else if (event.target.matches('button.Edit-Button')){
      // console.log(document.querySelector('li.Edit-Button'))

      const editBox = document.createElement('input') 
      // editBox.classList.add("Edit-Box")

      event.target.closest('li').appendChild(editBox)
      event.target.remove()

      editBox.addEventListener('keypress', function (event){
        if (event.key === 'Enter'){
          let newVal = event.target.value
          // console.log(event.target.previousElementSibling)
          // console.log(event.target.closest('li').querySelector('p'))
          let oldVal = event.target.closest('li').querySelector('p')
          oldVal.textContent = newVal
        //------- Edit button re-creation -------//
            const editButton = document.createElement('button')
            editButton.classList.add("Edit-Button")
            editButton.innerText = "Edit"
            // if you are appending and removing. you need to append before you remove the element.
            event.target.closest('li').append(editButton)
            editBox.remove()
        }       
      })
    }
  })


});
