// document.addEventListener("DOMContentLoaded", () => {
//   let form = document.querySelector('form')
//   form.addEventListener('submit', (e) => {
//     e.preventDefault()
//     buildToDo(e.target.new_todo.value)
//     form.reset()
//   })
// });

// function buildToDo(todo) {
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   btn.addEventListener('click', handleDelete)
//   btn.textContent = 'x'
//   p.textContent = `${todo} `
//   p.appendChild(btn)
//   console.log(p)
//   document.querySelector('#list').appendChild(p)
// }

// function handleDelete(e) {
//   e.target.parentNode.remove()
// }

// A delete function that will remove tasks from your list
// A priority value selected from a dropdown (Links to an external site.) that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    tasks(e.target.value)
    document.querySelector('form').reset()
  }
  )
}
);


function tasks(task) {
  const input = document.getElementById("new-task-description")
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  li.textContent = `${input.value}`
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}


function handleDelete(e) {
  e.target.parentNode.remove()
}
