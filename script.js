'use strict';

//variable
const textInput = document.querySelector('.textmain');
const convertBtn = document.querySelector('.convert');
let textResult = document.querySelector('.textresult');

//function
function convertText(text) {

    let newtxt;
    let newt;
    let makeArray;
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g; // specialchar
    const specialCharchecker = specialChars.test(text);  // checking if it has specialchars - returns true or false
    const checkspace = /\s/.test(text);                 // checking if it has space - returns true or false


    //checks if the start and end of the string has a space
    if (checkspace) {

        newtxt = text.trim();// removes space on the start and at the end of the string 
        specialCharchecker ? newt = text.split(specialChars) : console.log('specialcharno');
        makeArray = new Array(newt.length);
        console.log(newt.length);

        // let test = newtxt = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ ? console.log('real') : console.log('nope2');

    } else if (specialCharchecker) {
        newt = text.split(specialChars);
        console.log(newt);
        const [x, y] = newt;

        console.log(`${x}${y}`);
    }




}

//event listener
convertBtn.addEventListener('click', function () {

    const textHolder = textInput.value;
    textResult.textContent = textHolder;
    convertText(textHolder);



});

