window.onload = function(){

    let button = document.getElementById("btn") ;
    let input = document.getElementById("inp") ;
    let output = document.getElementById("result") ;
    let value = "" ;
    let todoList = [] ;
    button.onclick = function () {
        value += `<li>${input.value}</li>` ;
        todoList.push(value) ;
    }

    function display(){
        let list = "" ;
        for(let todo = 0 ; todo < todoList.length ; todo++ ){
            list += todoList[todo] ;
        }

        output.innerHTML = list ;
    }

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