window.onload = function(){

	let todos = document.getElementById("todos") ;
	let add   = document.getElementById("add") ;
	let newTodo = document.getElementById("newTodo") ;
    

	add.onclick = function(){
		let n = newTodo.value;  // value as a getter
		todos.innerHTML += "<li>" + n + "<span><button class="delete">  X  </button><span></li>"
	    newTodo.value = ""

	}

}