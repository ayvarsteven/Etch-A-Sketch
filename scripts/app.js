const mainContainer = document.querySelector('#main-container');
const canvasPixel = document.querySelector('.canvas-pixel')

// ==================== ~ set-pixel-dimension ====================

canvasPixel.addEventListener('click', addColor);

function addColor() {
    canvasPixel.style = ['background-color: red'];
    const pixelDimension = definePixelSize();
    canvasPixel.style.height = pixelDimension + 'px';
    canvasPixel.style.width = pixelDimension + 'px';
};

// ==================== ~ define-pixel-size ====================

// const userInput = prompt(`How many pixels would you like on the canvas?`);

function definePixelSize(userInput) {
    const canvasWidth = 600;
    const userPixelInput = 16; // this will be a prompt in the future

    function getRowLength() {
        return userPixelInput/4;
    };

    function returnPixelSize() {
        const rowLength = getRowLength();
        let pixelSize
        pixelSize = canvasWidth/rowLength
        return pixelSize
    };

    return returnPixelSize();
}

// ==================== ~ clone-mian-pixel ====================

const pixelClone = canvasPixel.cloneNode(true)
mainContainer.appendChild(pixelClone);
console.log(pixelClone)

function clonePixel() {
    
}



// ==================== ~ title ====================