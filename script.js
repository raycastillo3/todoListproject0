
  const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
} 
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
  
var i = 0;
function newTodo(item) {
  var item = parseInt(document.getElementById("item-count")) //.item = ++i);
  item = ++i
  item = isNaN(item) ? 0: item;
  document.getElementById ('item-count').innerHTML = item;
  alert('New TODO button clicked!');
}


function deleteTodo(){
 var deleteItem = parseInt(document.getElementById("unchecked-count"));
 deleteItem = --i;
 deleteItem = isNaN(deleteItem) ? 0: deleteItem;
 document.getElementById ('unchecked-count').innerHTML = deleteItem;
 alert ('A todo has been deleted!');



}

