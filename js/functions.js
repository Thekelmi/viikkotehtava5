'use strict'

let rand_num1 = 0
let rand_num2 = 0
let correct = 0
let incorrect = 0

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random()* max) + min;
}
 
const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1,10)
    rand_num2 = getRandomIntNumberInRange(1,10)
    document.querySelector('#num1').innerHTML = rand_num1
    document.querySelector('#num2').innerHTML = rand_num2
}

addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
});

const updateScore = () => {
    document.querySelector('#correct-count').innerHTML = correct
    document.querySelector('#incorrect-count').innerHTML = incorrect
}

document.querySelector('button').addEventListener('click', () => {
    const anwser = Number(document.querySelector('input').value)
    const correctAnswer = rand_num1 + rand_num2
    if (anwser === correctAnswer) {
        alert('Correct!')
        correct++
    } else {
        alert('Incorrect!')
        incorrect++
    }

    updateScore()

    randomizeNumbers()
    document.querySelector('input').value=''
})
 
