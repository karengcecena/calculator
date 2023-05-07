"use strict";

// get references to HTML elements
// const history = document.getElementById("history"); // element to hold history
const display = document.getElementById("display");
const calculation = document.getElementById('calculation');
const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button0 = document.getElementById("0");
const buttonAdd = document.getElementById("add");
const buttonSubtract = document.getElementById("subtract");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("divide");
const buttonClear = document.getElementById("clear");
const buttonEquals = document.getElementById("equals");

// add event listeners to buttons
button1.addEventListener("click", function() {
  updateDisplay("1");
});
button2.addEventListener("click", function() {
  updateDisplay("2");
});
button3.addEventListener("click", function() {
  updateDisplay("3");
});
button4.addEventListener("click", function() {
  updateDisplay("4");
});
button5.addEventListener("click", function() {
  updateDisplay("5");
});
button6.addEventListener("click", function() {
  updateDisplay("6");
});
button7.addEventListener("click", function() {
  updateDisplay("7");
});
button8.addEventListener("click", function() {
  updateDisplay("8");
});
button9.addEventListener("click", function() {
  updateDisplay("9");
});
button0.addEventListener("click", function() {
  updateDisplay("0");
});

// function to update the display with the given value
function updateDisplay(value) {

    // add a decimal point only if the display does not already contain one
    if (value === '.' && display.textContent.includes('.')) {
        return;
    }

    display.textContent += value;
}
    
// function to set the operator for the calculation
function setOperator(operator) {
    // get the current display value
    const currentValue = display.textContent;

    // store the operator and the current value in variables
    calculator.operator = operator;
    calculator.firstOperand = parseFloat(currentValue);

    // clear the display
    display.textContent = "";
}
    
// function to perform the calculation
function calculate() {
    // get the current display value
    const currentValue = display.textContent;
    
    // parse the current value as a float
    const secondOperand = parseFloat(currentValue);
    
    // perform the calculation based on the operator
    let result = 0;
    switch (calculator.operator) {
        case "+":
            result = calculator.firstOperand + secondOperand;
            break;
        case "-":
            result = calculator.firstOperand - secondOperand;
            break;
        case "*":
            result = calculator.firstOperand * secondOperand;
            break;
        case "/":
            result = calculator.firstOperand / secondOperand;
            break;
        default:
            break;
    }
    
    // update the display with the result
    display.textContent = result.toFixed(2); // Round the result to 2 decimal places

    // add the calculation to the history
    // history.textContent += calculator.firstOperand + " " + calculator.operator + " " + secondOperand + " = " + result + "  >>>  " + "\n";
    
    // clear the operator and first operand
    calculator.operator = null;
    calculator.firstOperand = null;
}
    
// function to clear the display and reset the calculator
function clearCalculator() {
    display.textContent = "";
    calculator.operator = null;
    calculator.firstOperand = null;
}
    
// add event listener to the clear button
buttonClear.addEventListener("click", function() {
    clearCalculator();
});

// add event listener to the equals button
buttonEquals.addEventListener("click", function() {
    calculate();
});

// create an object to store calculator data
const calculator = {
    operator: null,
    firstOperand: null
};
    
// add event listeners to math operation buttons
buttonAdd.addEventListener("click", function() {
    setOperator("+");
});

buttonSubtract.addEventListener("click", function() {
    setOperator("-");
});

buttonMultiply.addEventListener("click", function() {
    setOperator("*");
});

buttonDivide.addEventListener("click", function() {
    setOperator("/");
});