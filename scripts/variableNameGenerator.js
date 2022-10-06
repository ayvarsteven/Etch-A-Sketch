const pixelClone = `pixelClone`;
const numOfVariables = 3;

function defineName(numOfVariablesGenerator, callFunctionXTimes) { 
    let num = 0;
    for (i = 0; i < numOfVariables; i++) {
        num++
        newName = pixelClone + num
        console.log(newName)
        // newName += num
        // return newName
    }
    console.log(newName)
}

defineName();
// console.log(defineName())