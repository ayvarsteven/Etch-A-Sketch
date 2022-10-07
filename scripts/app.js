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

function numberGenerator() {
    for(i = 0; i <= userInput; i++) {
        listOfDivs.push(i)
    }
    listOfDivs.shift()
    return listOfDivs
}

numberGenerator();

// takes array of variables, clones them and appends them to the main container

function nameDivsToVariables() {
    for (b = 0; b <= userInput; b++) {
        divVariableNames[b] =   'pixelClone_' + listOfDivs[i];
    }
}
function appendClones() {
    for (i = 0; i <= userInput ; i++) {
        listOfDivs[i] = canvasPixel.cloneNode(true)
        listOfDivs[i].id = 'pixelClone_' + [i];
        mainContainer.appendChild(listOfDivs[i]);
        nameDivsToVariables();
        // listOfDivs[i].classList('.canvas-pixel')
    }
}

appendClones();

// ==================== ~ title ====================