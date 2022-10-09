const mainContainer = document.querySelector('#main-container');
const canvasPixel = document.createElement('div');
const defaultCanvasSize = 16;

// ==================== ~ clone-mian-pixel ====================


const generatedName = `pixelClone`;

let listOfDivs = [];
let divVariableNames = [];

function numberGenerator() {
    for(i = 0; i <= defaultCanvasSize; i++) {
        listOfDivs.push(i)
    }
    listOfDivs.shift()
    return listOfDivs
}

numberGenerator();

// takes array of variables, clones them and appends them to the main container

function appendClones() {
    for (i = 1; i <= defaultCanvasSize ; i++) {
        listOfDivs[i] = canvasPixel.cloneNode(true)
        listOfDivs[i].id = 'pixelClone_' + [i];
        listOfDivs[i].classList.add('canvas-pixel')
        mainContainer.appendChild(listOfDivs[i]);

        let b = document.querySelector('#pixelClone_' + i);

        b.addEventListener('click', () => {
            b.style = ['background-color: orangered;']
        })

        b.addEventListener('mouseenter', (event) => {
            event.target.classList.toggle('hover')

            setTimeout(() => {
                
            event.target.classList.toggle('hover')
            }, 500);
        })
    }
}

appendClones();

// ==================== ~ set-pixel-dimension ====================

function setPixelSize() {
    const pixelDimension = definePixelSize();
    canvasPixel.style.height = pixelDimension + 'px';
    canvasPixel.style.width = pixelDimension + 'px';
};

// ==================== ~ define-pixel-size ====================

// const defaultCanvasSize = prompt(`How many pixels would you like on the canvas?`);

function definePixelSize(grid) {
    const canvasWidth = 600;

    function getRowLength() {
        return grid/4;
    };

    function returnPixelSize() {
        const rowLength = getRowLength();
        let pixelSize
        pixelSize = canvasWidth/rowLength
        return pixelSize
    };

    return returnPixelSize();
}

// ==================== ~ grid-size ====================

const gridSize = document.querySelector('#grid-size')

gridSize.addEventListener('click', (event) => {
    let grid = prompt(`Grid Sizing?`)
    definePixelSize(grid);
    setPixelSize(grid);
    mainContainer.replaceChildren()
    
    
})

// ==================== ~ title ====================