const mainContainer = document.querySelector('#main-container');
const canvasPixel = document.createElement('div');
const canvasSize = 16;
let pixelDimension 
definePixelSize();


// ==================== ~ clone-mian-pixel ====================


const generatedName = `pixelClone`;

let listOfDivs = [];

function numberGenerator() {
    for(i = 0; i <= canvasSize; i++) {
        listOfDivs.push(i)
    }
    listOfDivs.shift()
    return listOfDivs
}

numberGenerator();

// takes array of variables, clones them and appends them to the main container
function appendClones() {
    for (i = 1; i <= canvasSize ; i++) {
        listOfDivs[i] = canvasPixel.cloneNode(true)
        listOfDivs[i].id = 'pixelClone_' + [i];
        listOfDivs[i].classList.add('canvas-pixel')
        listOfDivs[i].style.width = [pixelDimension + 'px'];
        listOfDivs[i].style.height = [pixelDimension + 'px'];
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

// ==================== ~ define-pixel-size ====================

function definePixelSize(gridSize = 16) {
    const canvasArea = 2400;
    gridSize = canvasArea/gridSize
    return pixelDimension = gridSize
}

// ==================== ~ grid-size ====================

const gridSize = document.querySelector('#grid-size')

gridSize.addEventListener('click', (event) => {
    let canvasSize = prompt(`Grid Sizing?`)
    gridSize = Number(gridSize)
    canvasSize = gridSize
    let pixelSize = definePixelSize(gridSize);
    // mainContainer.replaceChildren()
    return canvasSize
})

// // ==================== ~ title ====================
