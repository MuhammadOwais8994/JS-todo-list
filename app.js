var list = document.getElementById('list')

function addTodo(){
var todo_item = document.getElementById('todo-item');
var li = document.createElement('li');
var liText = document.createTextNode(todo_item.value);
li.appendChild(liText)

var editBtn = document.createElement('button');
var editBtnText = document.createTextNode('Edit')
editBtn.setAttribute('class','btn btn-outline-primary')
editBtn.setAttribute("onclick","editBtn(this)")
editBtn.appendChild(editBtnText)

var delBtn = document.createElement('button');
var delText = document.createTextNode('Delete')
delBtn.setAttribute('class','btn btn-outline-danger')
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)




li.appendChild(editBtn)
li.appendChild(delBtn)
list.appendChild(li)
todo_item.value = ""
}

function deleteItem(e){
e.parentNode.remove()

}

function editBtn(e){

    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter ToDo List","What to do...")
    e.parentNode.firstChild.nodeValue = editValue
    val = editValue

}

function deleteAll(){
    list.innerHTML = ""
}