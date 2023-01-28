'use strict'

const userInput = document.getElementById('inp');
const span = document.getElementById('remain-char');
const maxValue = 40;


userInput.addEventListener('input', ()=> {
    span.textContent = maxValue - userInput.value.length
    if(span.textContent < 10){
        span.style.color = 'rgb(243, 100, 100)';
        userInput.style.background = 'rgb(243, 100, 100)';
        
    }
    else{
        span.style.color = 'rgb(114, 114, 114)'
        userInput.style.background = 'rgb(248, 236, 248)'
    }
})