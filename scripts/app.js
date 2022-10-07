const mainContainer = document.querySelector('#main-container');
const canvasPixel = document.createElement('div');

// ==================== ~ set-pixel-dimension ====================

function setPixelSize() {
    const pixelDimension = definePixelSize(userInput);
    canvasPixel.style.height = pixelDimension + 'px';
    canvasPixel.style.width = pixelDimension + 'px';
};

// ==================== ~ define-pixel-size ====================

const userInput = 16;
// const userInput = prompt(`How many pixels would you like on the canvas?`);

function definePixelSize(userInput) {
    const canvasWidth = 600;

    function getRowLength() {
        return userInput/4;
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


const generatedName = `pixelClone`;

let listOfDivs = [];
let divVariableNames = [];

function defineName() { 
    let num = 0;
    for (i = 0; i < userInput; i++) {
        num++
        newName = generatedName + num
        variableNames.push(newName) 
    }
    return variableNames
}

defineName();

// takes array of variables, clones them and appends them to the main container
function appendClones() {
    for (i = 0; i < userInput -1; i++) {
        variableNames[i] = canvasPixel.cloneNode(true);
        mainContainer.appendChild(variableNames[i]);
    }
}

appendClones();

// ==================== ~ title ====================