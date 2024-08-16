var buttons = document.querySelectorAll('button')

var div = document.querySelector('#thediv')

buttons.onclick = function(){
    alert("xin chao");
}
buttons.forEach(element => {
    element.onclick = function(e) {
        console.log(e.target);
        
    }
})



