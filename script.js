'use strict';

//variable
const textInput = document.querySelector('.textmain');
const convertBtn = document.querySelector('.convert');
let textResult = document.querySelector('.textresult');

//function
function convertText(text) {

    let newtxt;
    const specialCharchecker = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(text);
    const checkspace = /\s/.test(text);


    if (checkspace) {
        newtxt = text.trim();
        specialCharchecker ? console.log('specialcharyes') : console.log('specialcharno');
        console.log(newtxt);

        // let test = newtxt = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/ ? console.log('real') : console.log('nope2');

    } else {
        console.log('nope');
    }




}

//event listener
convertBtn.addEventListener('click', function () {

    const textHolder = textInput.value;
    textResult.textContent = textHolder;
    convertText(textHolder);



});

