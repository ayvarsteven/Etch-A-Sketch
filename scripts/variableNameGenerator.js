const pixelClone = `pixelClone`;
const numOfVariables = 3;

let arrOfVars = [];

function defineName(numOfVariablesGenerator, callFunctionXTimes) { 
    let num = 0;
    for (i = 0; i < numOfVariables; i++) {
        num++
        newName = pixelClone + num
        arrOfVars += newName;
        console.log(arrOfVars);
    }
    return arrOfVars
}

defineName();

console.log(arrOfVars);


// ==============================================================================================================================

// =============== add-to-window-object =============== 

// for(i = 1; i < 5; i++) { 
//     window['var_'+i] = + i; 
// } 

// let pixelClone = `pixelClone`

// =============== use-eval() =============== 

// for (i = 0; i < 16; i++) {
//     eval('pixelClone_' + i + ' = ' +i);
// }

// console.log(pixelClone_3)

// console.log(var_1); 
// console.log(var_2);
// console.log(var_3);
// console.log(var_4);
// console.log(var_5);