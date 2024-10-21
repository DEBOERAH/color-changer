document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    console.log('DOM fully loaded and parsed');
    // For example, you can manipulate DOM elements or initialize functions
});


let colorBoxElem = document.getElementById('color-box');
let changeColorBtnElem = document.getElementById('change-color-btn');
//write a function to generate random color
function getRandomColor() {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
}
//add event listener to change the color-btn
changeColorBtnElem.addEventListener('click', function() {
    colorBoxElem.style.backgroundColor = getRandomColor();
})
