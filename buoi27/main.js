var headingElement = document.querySelector('h1')
console.log(headingElement.innerText);
console.log(headingElement.textContent);
console.log(headingElement);
headingElement.title = 'title'
headingElement.setAttribute('content', 'abc')


var valueContent = headingElement.getAttribute('content');
console.log(valueContent); // abc