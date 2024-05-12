const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors=["red", "blue", "green", "yellow"];

myButton.addEventListener('click', changeColor);

function changeColor(){

  let randomIndex = Math.floor(Math.random()*colors.length)
console.log(randomIndex)
  myBox.style.backgroundColor = colors[randomIndex];
}