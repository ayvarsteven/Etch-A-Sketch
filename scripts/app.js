const mainContainer = document.querySelector('#main-container');
const canvasPixel = document.createElement('div');
let gridSize = 16;
let pixelDimension 
definePixelSize();

// ==================== ~ clone-mian-pixel ====================


const generatedName = `pixelClone`;

let listOfDivs = [];

function numberGenerator(gridSize) {
    for(i = 0; i <= gridSize; i++) {
        listOfDivs.push(i)
    }
    listOfDivs.shift()
    return listOfDivs
}
numberGenerator();

// takes array of variables, clones them and appends them to the main container
function appendClones() {
    for (i = 1; i <= gridSize ; i++) {
        listOfDivs[i] = canvasPixel.cloneNode(true)
        listOfDivs[i].id = 'pixelClone_' + [i];
        listOfDivs[i].classList.add('canvas-pixel')
        listOfDivs[i].style.width = [pixelDimension + 'px'];
        listOfDivs[i].style.height = [pixelDimension + 'px'];
        mainContainer.appendChild(listOfDivs[i]);

        let b = document.querySelector('#pixelClone_' + i);

        b.addEventListener('click', () => {
            b.style.background = 'orangered';
        })

        b.addEventListener('mouseover', (event) => {
            event.target.classList.toggle('hover');
        })

        b.addEventListener('mouseleave', (event) => {
            setTimeout(() => {
                event.target.classList.toggle('hover')
            }, 500);
        })
    }
}
appendClones();

// ==================== ~ define-pixel-size ====================

function definePixelSize(gridSize = 16) {
    const canvasArea = 2400;
    gridSize = canvasArea/gridSize
    return pixelDimension = gridSize
}

// ==================== ~ grid-size ====================

const gridSizeBtn = document.querySelector('#grid-size')
gridSizeBtn.addEventListener('click', (event) => {
    gridSize = prompt(`Grid Sizing?`)
    gridSize = Number(gridSize)
    pixelDimension = definePixelSize(gridSize);
    mainContainer.replaceChildren()
    listOfDivs = [];
    numberGenerator(gridSize)
    appendClones();
    return gridSize
})

// // ==================== ~ title ====================
