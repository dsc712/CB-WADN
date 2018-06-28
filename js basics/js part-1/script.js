// if your script is in head then you should use window.onload
// for those functions which are interacting with our html document

// window.onload = function(){
// 	let btn = document.getElementById('btn') ;
// 	let name = document.getElementById('number') ;

// 	btn.onclick = function(){
// 		alert("Hello" + name.value()) ;
// 	}
// }

//----------------------------------------------------

// innerText and innerHTML

// fizzbuzz exercize  (part1)
// window.onload = function () {
    
//     let addtask = document.getElementById('addtask')
//     let newtask = document.getElementById('newtask')
//     let list = document.getElementById('list')

//     addtask.onclick = function () {
//         let start = new Date().getTime()
        
//         let N = +(newtask.value)
//         let contents = ""
//         for (let i = 1; i <= N; i++) {
//             let print = ""
//             if (i%3 == 0) print += "fizz"
//             if (i%5 == 0) print += "buzz"

//             if (print == "") print = i

//             contents += "<li>" + print + "</li>"

//         }
//         list.innerHTML = contents
        

//         console.log(new Date().getTime() - start) 
//     }

// }


// fizzbuzz exercize (part2)
// window.onload = function () {
    
//     let addtask = document.getElementById('addtask')
//     let newtask = document.getElementById('newtask')
//     let list = document.getElementById('list')

//     addtask.onclick = function () {
//         let start = new Date().getTime()
        
//         let N = +(newtask.value)
//         for (let i = 1; i <= N; i++) {
//             let print = ""
//             if (i%3 == 0) print += "fizz"
//             if (i%5 == 0) print += "buzz"

//             if (print == "") print = i

//             let item = document.createElement('li')
//             item.innerText = print
//             list.appendChild(item)

//         }
        

//         console.log(new Date().getTime() - start)
//     }

// }

//---------------------------------------------------------------------
// create todo using .removeChild() , .parentElement() , .children()  ----> DOM traversal  

