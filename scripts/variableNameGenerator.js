const varName = `pixelClone`;
const numOfVariables = 16;

let variableNames = [];

function defineName() { 
    let num = 0;
    for (i = 0; i < numOfVariables; i++) {
        num++
        newName = varName + num
        variableNames.push(newName) 
        console.log(variableNames);
    }
    return variableNames
}

defineName();

console.log(variableNames);