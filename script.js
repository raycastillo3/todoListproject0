
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
  var item = parseInt(document.getElementById("item-count").item);
  item = isNaN(item) ? 0: item;
  item+= 1;
  document.getElementById ('item-count').innerHTML = item;
  alert('New TODO button clicked!');
}

//Your goal will be to get this button to create new TODOs.
