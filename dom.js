"use strict";
// start DOM for type example button
let btnTypeTog = document.getElementById('btnType'); //get btn type element and assign it
let clickedType = false; //create clicked boolean for typed
//add click event listener
btnTypeTog.addEventListener("click", () => 
{
    //get element that will be changed
    let exampleText = document.getElementById('figureType');
    clickedType = !clickedType; //toggle clicked boolean
    //test whether clicked is true or false
    if (clickedType)
    {
        //if true show the example for type
        exampleText.style.display='block';
    }
    else
    {
        // else make it dissapear
        exampleText.style.display='none';
    }
});
//end DOM for type example button
//start DOM for var example button
let btnVarTog = document.getElementById('btnVar');
let clickedVar = false;
btnVarTog.addEventListener("click", () =>
{
    //get element that will be changed
    let exampleText = document.getElementById('figureVar')
    clickedVar = !clickedVar //toggle clicked boolean
    //test whether clicked is true or false
    if (clickedVar)
    {
        //if true show the example for type
        exampleText.style.display='block';
    }
    else
    {
        // else make it dissapear
        exampleText.style.display='none';
    }
});
//end DOM for var example button