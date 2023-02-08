let textTodo = document.querySelector('.text_todo')
const currentTodo = document.querySelector('.current_todo')
const createTodo = document.querySelector('.create_todo')
const completedTodoDiv = document.querySelector('.completed_todo')


createTodo.addEventListener('click', function createNewTodo() {
    if (!textTodo.value) {
        alert('Enter the task correctly')
    } else {
    const newTodoDiv = document.createElement('div')
    newTodoDiv.id = 'task'
    currentTodo.append(newTodoDiv)
    const textNewTodo = document.createElement('p')
    const buttonDoneTodo = document.createElement('button')
    buttonDoneTodo.addEventListener('click', function doneTask() {
        let divTodo = buttonDoneTodo.closest('#task')
        completedTodoDiv.append(divTodo)
        buttonDoneTodo.closest('.doneTask').remove()
        const buttonDeleteTodo = document.createElement('button')
        buttonDeleteTodo.classList = 'button_delete_todo'
        divTodo.append(buttonDeleteTodo)
        buttonDeleteTodo.innerHTML = 'Delete Todo'
        buttonDeleteTodo.addEventListener('click', function deleteTodo() {
            buttonDeleteTodo.closest('#task').remove()
        })
    })
    newTodoDiv.append(textNewTodo)
    newTodoDiv.append(buttonDoneTodo)
    buttonDoneTodo.innerHTML = 'Done'
    buttonDoneTodo.classList = 'doneTask'
    textNewTodo.innerHTML = textTodo.value
    let elements = document.querySelectorAll('#task')
    newTodoDiv.classList = `currentTask_${elements.length}`
    textTodo.value = ''
}
})


document.addEventListener('keydown', function(e) {
    if (e.code === 'Enter') {
        if (!textTodo.value) {
            alert('Enter the task correctly')
        } else {
        const newTodoDiv = document.createElement('div')
        newTodoDiv.id = 'task'
        currentTodo.append(newTodoDiv)
        const textNewTodo = document.createElement('p')
        const buttonDoneTodo = document.createElement('button')
        buttonDoneTodo.addEventListener('click', function doneTask() {
            let divTodo = buttonDoneTodo.closest('#task')
            completedTodoDiv.append(divTodo)
            buttonDoneTodo.closest('.doneTask').remove()
            const buttonDeleteTodo = document.createElement('button')
            buttonDeleteTodo.classList = 'button_delete_todo'
            divTodo.append(buttonDeleteTodo)
            buttonDeleteTodo.innerHTML = 'Delete Todo'
            textNewTodo.style.textDecoration = 'line-through'
            buttonDeleteTodo.addEventListener('click', function deleteTodo() {
                buttonDeleteTodo.closest('#task').remove()
            })
        })
        newTodoDiv.append(textNewTodo)
        newTodoDiv.append(buttonDoneTodo)
        buttonDoneTodo.innerHTML = 'Done'
        buttonDoneTodo.classList = 'doneTask'
        textNewTodo.innerHTML = textTodo.value
        let elements = document.querySelectorAll('#task')
        newTodoDiv.classList = `currentTask_${elements.length}`
        textTodo.value = ''
    }
    }
})





