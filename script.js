
  const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
} 
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
  

function newTodo() {
var Item = document.getElementById("item-count")
var newItem = document.createElement('li')
newItem.appendChild(Item)


//document.getElementById("todo-list").appendChild(newItem)
// document.getElementById("newTodo").appendChild(newItem)

  alert('New TODO button clicked!')
}





//console.log (typeof newTodo)



//Your goal will be to get this button to create new TODOs.
