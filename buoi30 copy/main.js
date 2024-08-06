var boxElement = document.querySelector('.box')
var html = '<span>HEADING</span>'
boxElement.innerHTML = html
//video 74
boxElement.style.width = '100 px'
boxElement.style.height = '300 px'
boxElement.style.backgroundColor = 'red'

Object.assign(boxElement.style, {
    width: '200 px',
    height: '100 px',
    backgroundColor: 'green',
})
console.log(boxElement.style.backgroundColor);


