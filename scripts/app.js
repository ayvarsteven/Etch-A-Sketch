const mainContainer = document.querySelector('#main-container');
const canvasPixel = document.createElement('div');
const gridSizeBtn = document.querySelector('#grid-size')

const generatedName = `pixelClone`;
let squaresPerSide = 4;
let pixelDimension 
let listOfDivs = [];

definePixelSize();

// ==================== ~ clone-mian-pixel ====================

function createNumberOfDivs(squaresPerSide) {
    for(i = 0; i <= squaresPerSide * squaresPerSide; i++) {
        listOfDivs.push(i)
    }
    listOfDivs.shift()
    return listOfDivs
}
createNumberOfDivs();

function paint() {
    listOfDivs[i].addEventListener('mousedown', (event) => {
        event.target.style.background = 'orangered';
    })
}

function hover() {

}

function generateGrid() {
    for (i = 1; i <= squaresPerSide * squaresPerSide; i++) {
        listOfDivs[i] = canvasPixel.cloneNode(true)
        listOfDivs[i].id = 'pixelClone_' + [i];
        listOfDivs[i].classList.add('canvas-pixel')
        listOfDivs[i].style.width = [pixelDimension + 'px'];
        listOfDivs[i].style.height = [pixelDimension + 'px'];
        mainContainer.appendChild(listOfDivs[i]);

        let b = document.querySelector('#pixelClone_' + i);

        b.addEventListener('mousedown', () => {
            b.style.background = 'orangered';
        })

        b.addEventListener('mouseover', (event) => {
            event.target.classList.toggle('hover');
        })

        b.addEventListener('mouseleave', (event) => {
            setTimeout(() => {
                event.target.classList.toggle('hover')
            }, 100);
        })
    }
}
generateGrid();

// ==================== ~ define-pixel-size ====================

function definePixelSize(squaresPerSide = 4) {
    const canvasWidth = 600;
    squaresPerSide = canvasWidth/squaresPerSide
    return pixelDimension = squaresPerSide
}

// ==================== ~ grid-size ====================

gridSizeBtn.addEventListener('click', (event) => {
    squaresPerSide = prompt(`Grid Sizing?`)
    if (squaresPerSide > 100) {
        return alert(`number cannot exceed 100`)
    }
    squaresPerSide = Number(squaresPerSide)
    pixelDimension = definePixelSize(squaresPerSide);
    mainContainer.replaceChildren()
    listOfDivs = [];
    createNumberOfDivs(squaresPerSide)
    generateGrid();
    return squaresPerSide
})

// // ==================== ~ title ====================
