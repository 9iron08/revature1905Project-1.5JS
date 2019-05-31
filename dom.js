"use strict";
// start DOM for type example button
let btnTypeTog = document.getElementById('btnType'); //get btn type element and assign it
let clickedType = false; //create clicked boolean for typed
if (btnTypeTog)
{
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
}
//end DOM for type example button
//start DOM for var example button
let btnVarTog = document.getElementById('btnVar');
let clickedVar = false;
if (btnVarTog) {
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
}
//end DOM for var example button

//start DOM for var example button
let btn2Tog = document.getElementById('btn2');
let clicked2 = false;
if (btn2Tog) {

btn2Tog.addEventListener("click", () =>
{
        //get element that will be changed
        let exampleText = document.getElementById('figurestatement')
        clicked2 = !clicked2 //toggle clicked boolean
        //test whether clicked is true or false
        if (clicked2)
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
}
//end DOM for var example button

//start DOM for var example button
let btn3Tog = document.getElementById('btn3');
let clicked3 = false;
if (btn3Tog) {

btn3Tog.addEventListener("click", () =>
{
        //get element that will be changed
        let exampleText = document.getElementById('ifelsefigure')
        clicked3 = !clicked3 //toggle clicked boolean
        //test whether clicked is true or false
        if (clicked3)
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
}
//end DOM for var example button


//start DOM for var example button
let btn4Tog = document.getElementById('btn4');
let clicked4 = false;
if (btn4Tog) {

btn4Tog.addEventListener("click", () =>
{
        //get element that will be changed
        let exampleText = document.getElementById('switchfigure')
        clicked4 = !clicked4 //toggle clicked boolean
        //test whether clicked is true or false
        if (clicked4)
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
}
//end DOM for var example button

//start DOM for var example button
let btn5Tog = document.getElementById('btn5');
let clicked5 = false;
if (btn5Tog) {

btn5Tog.addEventListener("click", () =>
{
        //get element that will be changed
        let exampleText = document.getElementById('forloopfigure')
        clicked5 = !clicked5 //toggle clicked boolean
        //test whether clicked is true or false
        if (clicked5)
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
}
//end DOM for var example button

//start DOM for var example button
let btn6Tog = document.getElementById('btn6');
let clicked6 = false;
if (btn6Tog) {

btn6Tog.addEventListener("click", () =>
{
        //get element that will be changed
        let exampleText = document.getElementById('whileloopfigure')
        clicked6 = !clicked6 //toggle clicked boolean
        //test whether clicked is true or false
        if (clicked6)
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
}
//end DOM for var example button