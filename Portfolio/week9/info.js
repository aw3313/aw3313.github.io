
const boxQuery = document.querySelector("body")

const myButton = document.querySelector("#button1")

const myButton2 = document.querySelector("#button2")

myButton.addEventListener('click', wordColor)

myButton2.addEventListener('click', growing)


function wordColor() {
    boxQuery.style.color = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)

    // random color picker from Franck Freiburger on Stack Exchange
}

function growing(){
  this.style.fontSize = '36px';
  this.style.color = 'red';
}
