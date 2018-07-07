let todoList = [];

window.onload = function () {

    let button = document.getElementById("btn");
    let input = document.getElementById("inp");
    let output = document.getElementById("result");
    let value = "";

    //For checking if a string is blank, null or undefined
    String.prototype.isEmpty = function () {
        return (this.length === 0 || !this.trim());
    };

    // create a new todo_item

    button.onclick = function () {

        // taking value from input
        value = `${input.value}`;


        if (!value.isEmpty()) {

            // creating an li element
            let todo = document.createElement('li');
            todo.setAttribute("onclick" , "check(this)") ;
            todo.setAttribute("id" , `${todoList.length}`) ;
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
            output.append(todo);

            //push the new_todo into our array todoList
            todoList.push(todo);
            console.log(todoList);
            input.value = "";


        }else{
            alert("empty todos can't be created , try typing your todo , then click this button ") ;
        }


    }
}

// delete function
function del(btn) {

        // for deletion
            btn.parentElement.remove();
            event.stopPropagation();
            restoreArray(btn.parentElement.id) ;


}

// check function
function check(todo) {
    // for work being done
            todo.classList.toggle("done") ;
            event.stopPropagation();

}

// update function
function update(btn) {

    let ID = btn.parentElement.id ;
    let newValue = "";
    let li = btn.parentElement ;
    newValue = prompt("update your todo from , ( " + li.firstChild.textContent + " ) to " );
    li.textContent = "" ;

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

    event.stopPropagation() ;
    alert("todo updated successfully ") ;

    li.setAttribute("id" , `${ID}`) ;

    console.log(todoList) ;
}

function restoreArray(todoId){


    for (let i = 0; i < todoList.length  ; i++ ) {
        if(todoList[i].id == todoId ){
            todoList.splice(i , 1 ) ;
        }
        todoList[i].id = i  ;
    }

    console.log(todoList) ;
}

// push()  - it adds the element at end
// slice(begin , end )  -  it deletes the element and return a new array  [begin , end)
//splice(begin , end , new item1 , new item2 .... )  - it can add as well as delete element and it
// performs operations on original array instead of returning new array with modification


//tasks

// add a function update
// add a function delete
// replace innerHTML with optimized approach
// add markAsDone ( optional )
// add markAsDone ( optional )
