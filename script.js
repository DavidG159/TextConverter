'use strict';

const textInput = document.querySelector('.textmain');
const convertBtn = document.querySelector('.convert');
let textResult = document.querySelector('.textresult');

convertBtn.addEventListener('click', function () {

    const test = textInput.value;
    textResult.textContent = test;
    console.log(test);



});

