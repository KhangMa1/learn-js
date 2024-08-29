var aElement = document.querySelector('a');

aElement.onclick = function(e) {
   e.preventDefault()
   console.log(e.target.href);
   
}

// let
const a = {name: 'Khang'}
a.name = 'songtoan'
a.age = 10;
delete a.name;

// a  = ['abc']
console.log(a);


const b = 2;
// b=3;