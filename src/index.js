document.addEventListener("DOMContentLoaded", () => { // add a listener to the DOM
  document.querySelector('form').addEventListener('submit', (e) => { // add a listener to the form
    e.preventDefault() // prevent the form from submitting
    tasks(e.target.value) // call the tasks function
    document.querySelector('form').reset() // reset the form
  }
  )
}
);


function tasks(task) { // function to add tasks
  const input = document.getElementById("new-task-description") // get the input
  let li = document.createElement('li') // create a new li
  let btn = document.createElement('button') // create a new button
  btn.addEventListener('click', handleDelete) // add a listener to the button
  btn.textContent = 'X' // set the text of the button
  li.textContent = `${input.value}` // set the text of the li
  li.appendChild(btn) // append the button to the li
  document.querySelector('#tasks').appendChild(li) // append the li to the ul
}


function handleDelete(e) { // function to handle the delete button
  e.target.parentNode.remove() // remove the li
}
