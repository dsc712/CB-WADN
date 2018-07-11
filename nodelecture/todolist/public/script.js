
function display() {

  $.ajax({
      url : '/display' ,
      method : 'GET' ,
      success : function(data){
          console.log(data) ;
          for(let i = 0 ; i < data.todoListserver.length ; i++ ){
              createTodo(data.todoListserver[i], data.status[i] ) ;
          }
      }
  }) ;

}


$(document).ready( function(){

    let button = document.getElementById("btn");
    let input = document.getElementById("inp");
    display() ;


    //For checking if a string is blank, null or undefined
    String.prototype.isEmpty = function () {
        return (this.length === 0 || !this.trim());
    };

    button.onclick = abcd;
     function abcd(){
         $.ajax ( {
             url: '/add',
             method: 'POST',
             data: {todo : input.value  } ,
             success: function(data) {
                 console.log(data);
                 // append todo
                 createTodo(data , 0 ) ;
             }
         }) ;

         input.value = '' ;
     }


}) ;



// create a new todo_item
function createTodo(value , status ) {

    let output = document.getElementById("result");

    if (!value.isEmpty()) {

        // creating an li element
        let todo = document.createElement('li');
        todo.setAttribute("onclick" , "check(this)") ;
         todo.setAttribute("value" , status ) ;

        //creating delete button
        let del_btn = document.createElement('button');

        //creating update button
        let upd_btn = document.createElement('button');

        // creating delete icon
        let del_icon = document.createElement('i');
        del_icon.setAttribute("class", "fa fa-trash");
        del_icon.setAttribute("aria-hidden", "true");

        // putting del_icon to del_btn and set onclick attribute
        del_btn.append(del_icon);
        del_btn.setAttribute("onclick", "del(this)");

        // putting upd_icon to upd_btn and set onclick attribute
        let upd_icon = document.createElement("i") ;
        upd_icon.setAttribute("class" , "fa fa-edit ") ;
        upd_btn.append(upd_icon) ;
        upd_btn.setAttribute("onclick" , "update(this)") ;

        // append value and delete button to new_todo
        todo.append(value);
        todo.append(del_btn);
        todo.append(upd_btn);

        todo.setAttribute("class", "todoItem");
        // append the new_todo to our todo_list

        if(status == 1){
            todo.classList.add('done') ;
        }

        output.append(todo);

    }else{
        alert("empty todos can't be created , try typing your todo , then click this button ") ;
    }


}

// delete function
function del(btn) {

    console.log( $(btn).parent().index() ) ;
    $.ajax({
        url : '/delete' ,
        method : 'POST' ,
        data : {index : $(btn).parent().index() }  ,
        success : function (data) {
            $(btn).parent().remove() ;
        }

    }) ;


}

// check function
function check(todo) {
    // for  completed or uncompleted  work

            $.ajax({
                url : '/check' ,
                method : 'POST' ,
                data : {
                         val : todo.value ,
                         index : $(todo).index()
                        }  ,
                success : function(){
                    todo.classList.toggle("done") ;
                    console.log("todo completed ") ;
                }

            }) ;
}


// update function
function update(btn) {

    let newValue = "";
    let li = btn.parentElement ;
    newValue = prompt("update your todo from , ( " + li.firstChild.textContent + " ) to " );

    li.textContent = "" ; // remove older value
    li.setAttribute("onclick" , "check(this)") ;

    //creating delete button
    let del_btn = document.createElement('button');

    //creating update button
    let upd_btn = document.createElement('button');

    // creating delete icon
    let del_icon = document.createElement('i');
    del_icon.setAttribute("class", "fa fa-trash");
    del_icon.setAttribute("aria-hidden", "true");

    // putting del_icon to del_btn and set onclick attribute
    del_btn.append(del_icon);
    del_btn.setAttribute("onclick", "del(this)");

    // putting upd_icon to upd_btn and set onclick attribute
    let upd_icon = document.createElement("i") ;
    upd_icon.setAttribute("class" , "fa fa-edit ") ;
    upd_btn.append(upd_icon) ;
    upd_btn.setAttribute("onclick" , "update(this)") ;

    // append value and delete button to new_todo
    li.append(newValue);
    li.append(del_btn);
    li.append(upd_btn);


    alert("todo updated successfully with " + newValue ) ;
    event.stopPropagation() ;

    $.ajax({
        url : '/update' ,
        method : 'POST' ,
        data : {
            position  : $(li).index()  ,
            val : newValue
             } ,
        success : function(){
             console.log("todolist updated successfully ") ;
        }

    }) ;



}