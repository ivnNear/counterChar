'use strict'

const input = document.getElementById('inp');
const span = document.getElementById('remain-char');



input.addEventListener('input', (e)=> {
    let length = e.target.value.length;
    let maxLength = 40;
    let remainingChar = maxLength - length;
    span.textContent = remainingChar;

    if(remainingChar === 0 ){
        input.classList.add('error');
        span.classList.add('error')
    }
    else if(remainingChar <= 10){
        input.classList.add('warning');
        span.classList.add('warning')
        input.classList.remove('error');
        span.classList.remove('error')
    }
    else{
        input.classList.remove('warning');
        span.classList.remove('warning')
        
    }
})