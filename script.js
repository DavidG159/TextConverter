'use strict';

//variable
const textInput = document.querySelector('.textmain');
const convertBtn = document.querySelector('.convert');
let textResult = document.querySelector('.textresult');

//functions


//main function
function convertText(text) {

    let newtxt;
    let newt;
    let makeArray;
    let endResult;
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g; // specialchar
    const specialCharchecker = specialChars.test(text);  // checking if it has specialchars - returns true or false
    const checkspace = /\s/.test(text);                 // checking if it has space - returns true or false


    //checks if the start and end of the string has a space
    if (checkspace) {

        newtxt = text.trim();// removes space on the start and at the end of the string 
        specialCharchecker ? newt = newtxt.split(specialChars).join('') : console.log('specialcharno');
        makeArray = new Array(newt.length);
        console.log(newt, "This is newt");
        endResult = checkSpaceMiddle(newt);

        // let test = newtxt = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ ? console.log('real') : console.log('nope2');

        //if strings has no space at the start and end
    } else if (specialCharchecker) {
        newt = text.split(specialChars);
        console.log(newt, "2nd part is printed");

    }

    return endResult;



}

//checkspace middle 
function checkSpaceMiddle(word) {
    let result;
    //return console.log(word.includes('') || word.includes(' '));
    //checks if the array has a '' or ' '
    if (word.includes('') || word.includes(' ')) {
        console.log(word.trim().split(''));
        result = word.trim().split('').filter(c => c !== '' && c !== ' ').join('');

    }
    console.log(result, "THIS IS THE RESULT")

    return result;
}


//=================================================================
//event listener
convertBtn.addEventListener('click', function () {

    const textHolder = textInput.value;
    textResult.textContent = convertText(textHolder);

});

