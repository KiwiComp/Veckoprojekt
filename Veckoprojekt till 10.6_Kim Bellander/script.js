const display = document.querySelector('.display')

let displayValue = ''
let setNewValue = 0
let oldValue = 0
let lastOperator = 0


function makeNumber(number) {
    if (setNewValue  == 1) {
        displayValue = number
        display.innerText = displayValue
        setNewValue = 0
    } else {
        //displayValue += number
        displayValue = displayValue*10 + number
        display.innerText = displayValue
    }
}

function add(a,b){
    return a + b
}

const nine = document.querySelector('.nine')
nine.addEventListener('click', makeNine)
function makeNine() {
    makeNumber(9)
}

const eight = document.querySelector('.eight')
eight.addEventListener('click', makeEight)
function makeEight() {
    makeNumber(8)
}

const seven = document.querySelector('.seven')
seven.addEventListener('click', makeSeven)
function makeSeven() {
    makeNumber(7)
}

const six = document.querySelector('.six')
six.addEventListener('click', makeSix)
function makeSix() {
    makeNumber(6)
}

const five = document.querySelector('.five')
five.addEventListener('click', makeFive)
function makeFive() {
    makeNumber(5)
}

const four = document.querySelector('.four')
four.addEventListener('click', makeFour)
function makeFour() {
    makeNumber(4)
}

const three = document.querySelector('.three')
three.addEventListener('click', makeThree)
function makeThree() {
    makeNumber(3)
}

const two = document.querySelector('.two')
two.addEventListener('click', makeTwo)
function makeTwo() {
    makeNumber(2)
}

const one = document.querySelector('.one')
one.addEventListener('click', makeOne)
function makeOne() {
    makeNumber(1)
}

const zero = document.querySelector('.zero')
zero.addEventListener('click', makeZero)
function makeZero() {
    makeNumber(0)
}

const plus = document.querySelector('.plus')
plus.addEventListener('click', makePlus)
function makePlus() {
    if (lastOperator != 0) {
        displayValue = lastOperator(displayValue, oldValue) 
    }
    oldValue = displayValue
    lastOperator = add
    setNewValue = 1
    display.innerText = displayValue
}

const orange = document.querySelector('.orange')
orange.addEventListener('click', makeOrange)
function makeOrange() {
    if (lastOperator != 0) {
        displayValue = lastOperator(displayValue, oldValue) 
    }
    oldValue = displayValue
    setNewValue = 1
    lastOperator = 0
    display.innerText = displayValue
}

const clear = document.querySelector('.clear')
clear.addEventListener('click', makeClear)
function makeClear() {
    oldValue = 0
    displayValue = 0
    setNewValue = 1
    lastOperator = 0
    display.innerText = ''
}