const calculator = {
  displayValue: '0',
  firstOperand: null,
  secondOperand: null,
  isSecondDisplayed: false,
  operator: null,
}

const keypad = document.querySelector('.calc__keys');

const decimalPlaces = (str) => {
  if (str.includes('.')) {
    let fractions = str.split('.').pop();
    return fractions.length;
  }
  return 0;
};

const maxDecimalLength = (a, b) =>
  Math.max(decimalPlaces(a.toString()), decimalPlaces(b.toString()));

const powerOfTen = (times) => 10 ** times;

function calculate(a, b, operator) {
  let result = b;

  let maxLength = maxDecimalLength(a, b);

  if(operator === '+') {
    result =  (a * powerOfTen(maxLength) + b * powerOfTen(maxLength)) /
    powerOfTen(maxLength);
  } else if (operator === '−') {
    result = (a * powerOfTen(maxLength) - b * powerOfTen(maxLength)) /
    powerOfTen(maxLength);
  } else if (operator === '×') {
    result = (a * powerOfTen(maxLength) * b * powerOfTen(maxLength)) /
    powerOfTen(maxLength)**2;
  } else if (operator === '÷') {
        result = (a * powerOfTen(maxLength) / b * powerOfTen(maxLength)) /
    powerOfTen(maxLength)**2;
  }

  return decimalPlaces(result.toString()) > 8 ? result.toFixed(8) : result;
}

function updateDisplayValue() {
  const display = document.querySelector('.calc__disp');
  display.textContent = calculator.displayValue;
}

function clearCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.secondOperand = null;
  calculator.isSecondDisplayed = false;
  calculator.operator = null;
}

function handleDigit(digit) {
  const displayValue = calculator.displayValue;

  if(calculator.operator && calculator.secondOperand === null) {
    calculator.displayValue = digit;
    calculator.secondOperand = parseFloat(digit);
    calculator.isSecondDisplayed = true;
    return
  }

  calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;

  if(calculator.secondOperand !== null && calculator.firstOperand !== null && !calculator.isSecondDisplayed) {
    calculator.displayValue = digit;
    calculator.secondOperand = parseFloat(digit);
    calculator.isSecondDisplayed = true;
  }

  if(!calculator.isSecondDisplayed) {  
    calculator.firstOperand = parseFloat(calculator.displayValue);
  } else {
    calculator.secondOperand = parseFloat(calculator.displayValue);
  }

}

function handleOperator(newOperator) {

  if(calculator.firstOperand === null) {
    calculator.firstOperand = parseFloat(calculator.displayValue);
    return;
  }

  if (calculator.secondOperand === null) {
    calculator.operator = newOperator !== '=' ? newOperator : calculator.operator;
    return;
  } 

  if(calculator.secondOperand !== null && !calculator.isSecondDisplayed && newOperator !=='=') {
    calculator.operator = newOperator;
    return;
  }
  
  let result = calculate(calculator.firstOperand, calculator.secondOperand, calculator.operator);
  calculator.displayValue = result;
  calculator.firstOperand = parseFloat(result);

  calculator.operator = newOperator !== '=' ? newOperator : calculator.operator;
  calculator.isSecondDisplayed = false;

}

function handleDecimal() {
  if(calculator.operator && calculator.secondOperand === null) {
    calculator.displayValue = '0.'
    calculator.secondOperand = 0;
    calculator.isSecondDisplayed = true;
    return
  }

  if(!calculator.displayValue.includes('.')) {
    calculator.displayValue += '.';
  }
}

function handleNegative() {
  let displayValue = -calculator.displayValue;
  calculator.displayValue = displayValue.toString();

  if(calculator.isSecondDisplayed && calculator.secondOperand !== null) {
    calculator.secondOperand = displayValue;
  } else {
    calculator.firstOperand = displayValue;
  }
}

function handleDeleteDigit() {
  let displayValue = calculator.displayValue;

  if(displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
  } else {
    displayValue = 0;
  }

  calculator.displayValue = displayValue.toString();

  if(calculator.isSecondDisplayed) {
    calculator.secondOperand =  parseFloat(displayValue);
    calculator.secondOperand = displayValue === 0 ? null : parseFloat(displayValue);
    calculator.isSecondDisplayed = !calculator.secondOperand ? false : true;
    calculator.displayValue = !calculator.secondOperand ? calculator.firstOperand.toString() : displayValue.toString();
  } else {
    calculator.firstOperand =  parseFloat(displayValue);
  }
}

updateDisplayValue();

keypad.addEventListener('click', (event) => {
  const target = event.target;
  const value = target.textContent;

  if (!target.matches('button')) {
    return;
  }

  switch(value) {
    case '+':
    case '−':
    case '×':
    case '÷':
    case '=':
      handleOperator(value);
      break;
    case '.':
      handleDecimal();
      break;
    case '+/-':
      handleNegative();
      break;
    case 'C':
      clearCalculator();
      break;
    case '→':
      handleDeleteDigit();
      break;
    default:
      if(Number.isInteger(parseFloat(value))) {
        handleDigit(value);
      }
      console.log(value);
  }

  updateDisplayValue()
});

