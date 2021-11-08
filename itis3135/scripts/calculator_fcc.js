/*
    Calculator Try
    Charlotte Hill

    adapting the example on pg 155, for the selecting properties
*/

"use strict"

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('calulator_keys')

keys.addEventListener('click', e => {
    if(e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action

        if(!action){
            console.log('number key!')
        }
    }
})