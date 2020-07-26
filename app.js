var list = document.getElementById("list");

// here we Use DOM for create List when user insert value create new li  and append in list

function addTodo(){
    
    var todo_item = document.getElementById("todo-item")
   
    
    // create li tag with text node
    
    var li =document.createElement('li') //in java script we can say text is Node 
    
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
    
    // create delete button with DOM Javascript
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn") //setAttribute take two value one name of attribute and second is that is value and this set attrbute in html tag we set multiple attribute
    delBtn.setAttribute("onclick","deleteItem(this)")//we target button so we pass this key word in function argument also pass in parameter e  or any character e jsut parameter
    delBtn.appendChild(delText)

    //create edit button 
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delBtn)  
    li.appendChild(editBtn)
    
    list.appendChild(li)
     
     todo_item.value = ""  
     
 //   console.log(li)

}

function deleteItem(e){    

//console.log(e.parentNode)
e.parentNode.remove()

}

function editItem(e){

  //  var val = e.parentNode.firstChild.nodeValue
    
    var val = prompt("Enter Updated Value",e.parentNode.firstChild.nodeValue)  // promot always get two value one placholder second is defaultValue

    e.parentNode.firstChild.nodeValue = val;
    
     //  e.parentNode.firstChild.nodeValue = "ubaid"
    //  console.log(editValue) // li text is known as nodeValue

}

function deleteAll(){

list.innerHTML = ""

}