// operation functions

function addition(a,b){
    return a + b
}

function subtraction(a,b){
    return a - b
}

function multiplication(a,b){
    return a * b
}

function division (a,b){
    if (b === 0){
        return 'ERROR';
    } else {
    return a / b
    }
}

//variables

let num1 = 5
let operation = "+"
let num2 = 4

function operate(operator, num1, num2){
     console.log(operator, operator.charCodeAt(0));
    switch(operator){
        case "+":
            return addition(num1, num2);
        case "−":  // this is U+2212, NOT a regular hyphen
            return subtraction(num1, num2);
        case "×":  // U+00D7
            return multiplication(num1, num2);
        case "÷":  // U+00F7
            return division(num1, num2);
        default:
            return 'ERROR';
    }
}

//variables
const digitBtn = document.querySelectorAll('.digit')
const operatorBtn = document.querySelectorAll('.operation:not(.equals)')
const funcBtn = document.querySelectorAll('.function')

const answerDisplay = document.querySelector('.answer')
const operationCharacter = document.querySelector('.operationCharacters')


digitBtn.forEach((button) => {
    button.addEventListener('click' , () => {
        answerDisplay.textContent += button.textContent
    })
})

let previousKeyType;

operatorBtn.forEach((button) => {
    button.addEventListener('click', () => {
        answerDisplay.textContent += button.textContent;
        operation = button.textContent;
    })
})

document.getElementById('equalBtn').addEventListener('click', () => {
   const expression = answerDisplay.textContent;
   const opIndex = expression.indexOf(operation);
   const firstOperand = expression.slice(0,opIndex);
   const secondOperand = expression.slice(opIndex + 1);
   num1 = parseFloat(firstOperand);
   num2 = parseFloat(secondOperand);
     console.log(operation, operation.charCodeAt(0)); 
   let result = operate(operation,num1,num2);
   answerDisplay.textContent = result;
})

document.getElementById('clearBtn').addEventListener('click', () => {
    answerDisplay.textContent = "";
    operationCharacter.textContent = "";
    operation = "";
});