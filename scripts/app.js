const mainContainer = document.querySelector('#main-container');
const canvasPixel = document.createElement('div');
let squaresPerSide = 16;
let pixelDimension 
definePixelSize();

// ==================== ~ clone-mian-pixel ====================


const generatedName = `pixelClone`;

let listOfDivs = [];

function numberGenerator(squaresPerSide) {
    for(i = 0; i <= squaresPerSide; i++) {
        listOfDivs.push(i)
    }
    listOfDivs.shift()
    return listOfDivs
}
numberGenerator();

// takes array of variables, clones them and appends them to the main container
function appendClones() {
    for (i = 1; i <= squaresPerSide ; i++) {
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

function definePixelSize(squaresPerSide = 16) {
    const canvasArea = 2400;
    squaresPerSide = canvasArea/squaresPerSide
    return pixelDimension = squaresPerSide
}

// ==================== ~ grid-size ====================

const gridSizeBtn = document.querySelector('#grid-size')
gridSizeBtn.addEventListener('click', (event) => {
    squaresPerSide = prompt(`Grid Sizing?`)
    squaresPerSide = Number(squaresPerSide)
    pixelDimension = definePixelSize(squaresPerSide);
    mainContainer.replaceChildren()
    listOfDivs = [];
    numberGenerator(squaresPerSide)
    appendClones();
    return squaresPerSide
})

// // ==================== ~ title ====================
