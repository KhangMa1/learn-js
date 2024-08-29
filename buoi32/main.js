// var buttons = document.querySelectorAll('button')

// var div = document.querySelector('#thediv')

// buttons.onclick = function(){
//     alert("xin chao");
// }
// buttons.forEach(element => {
//     element.onclick = function(e) {
//         console.log(e.target);
        
//     }
// })


// var liList = document.querySelectorAll('li');

// liList.forEach(e => e.onclick = function(e){
//    console.log(e.target.innerText);
   
// } )


// video 77
// input
// var inputValue;
// var inputElement =
//     document.querySelector('input[type="text"]')
// inputElement.oninput = function(e) {
//     inputValue = e.target.value;
//     console.log(inputValue);
    
// }


// var inputElement =
//     document.querySelector('input[type="checkbox"]')

//     inputElement.onchange = function(e){
//         console.log(e.target.checked);
//     }

// var inputElement =
//     document.querySelector('select')

//     inputElement.onchange = function(e){
//         console.log(e.target.value);
        
//     }

var inputElement =
     document.querySelector('input[type="text"]')
     inputElement.onkeydown = function(e){
        console.log(e.target.value);
        
     }

//      var inputElement =
//      document.querySelector('input[type="text"]')
//      inputElement.onkeyup = function(e){
//         console.log(e.target.value);
        
//      }