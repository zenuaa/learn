'use strict'

const inputUSD = document.querySelector('#convertUSD'),
        inputUAH = document.querySelector('#convertUAH');
inputUSD.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    request.addEventListener('load', ()=>{
        if(request.status === 200){
            // console.log(request.response);  
            const data = JSON.parse(request.response);
            // console.log(data.current.usd);
            inputUAH.value = (inputUSD.value * data.current.usd).toFixed(2);
        }
        else{inputUAH.value = 'что-то пошло не так'}
    })

})
