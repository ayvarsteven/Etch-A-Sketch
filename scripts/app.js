const mainContainer = document.querySelector('#main-container');
const canvasPixel = document.querySelector('.canvas-pixel')

canvasPixel.addEventListener('click', addColor);

function addColor() {
    canvasPixel.style = ['background-color: red'];
};

console.log(canvasPixel);