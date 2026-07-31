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
let operation = ""
let num2 = 4

function operate(operator, num1, num2){
     console.log(operator, operator.charCodeAt(0));
    switch(operator){
    case "+":
        return addition(num1, num2);
    case "−":  // U+2212 minus sign, not a keyboard hyphen
        return subtraction(num1, num2);
    case "×":  // U+00D7 multiplication sign
        return multiplication(num1, num2);
    case "÷":  // U+00F7 division sign
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
         if (operation !== "") {
            let result = calculateResult();
            answerDisplay.textContent = result;
        }
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

function calculateResult(){
    const expression = answerDisplay.textContent;
   const opIndex = expression.indexOf(operation);
   const firstOperand = expression.slice(0,opIndex);
   const secondOperand = expression.slice(opIndex + 1);
   num1 = parseFloat(firstOperand);
   num2 = parseFloat(secondOperand);
    console.log(operation, operation.charCodeAt(0)); 
   return operate(operation,num1,num2)
}

document.getElementById('clearBtn').addEventListener('click', () => {
     answerDisplay.textContent = "";
    operationCharacter.textContent = "";
    operation = "";
});

document.getElementById('backspaceBtn').addEventListener('click', () => {
   answerDisplay.textContent = answerDisplay.textContent.slice(0, answerDisplay.textContent.length - 1)
});

document.getElementById('decimalBtn').addEventListener('click', () => {
    const opIndex = answerDisplay.textContent.indexOf(operation);
    const currentNumber = answerDisplay.textContent.slice(opIndex + 1);

    if (currentNumber.includes(".")) {
        return;
    } else {
        answerDisplay.textContent += ".";
    }
});
document.getElementById('percentBtn').addEventListener('click', () => {
    const opIndex = answerDisplay.textContent.indexOf(operation);
    let currentNumber;
    let beforeCurrentNumber;

    if (operation === "") {
        currentNumber = answerDisplay.textContent.slice(0);
        beforeCurrentNumber = "";
    } else {
        const currentNumber = answerDisplay.textContent.slice(opIndex + 1);
const beforeCurrentNumber = answerDisplay.textContent.slice(0, opIndex + 1);
    }

    const percentValue = parseFloat(currentNumber) / 100;
    answerDisplay.textContent = beforeCurrentNumber + percentValue;
});