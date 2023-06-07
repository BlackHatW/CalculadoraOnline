const previousOperandText = document.querySelector(".previousOperand");
const currentOperandText = document.querySelector(".currentOperand");
const operands = document.querySelectorAll(".operands");
const numbers = document.querySelectorAll(".numbers");
const equals = document.querySelector(".operands-equals");
const allClearButton = document.querySelector(".data-all-clear");

class Calculator {
    constructor(previousOperandText, currentOperandText) {
      this.previousOperandText = previousOperandText;
      this.currentOperandText = currentOperandText;
      this.clear();
    }
  
    formatDisplayNumber(number) {
      const stringNumber = number.toString();
  
      const integerDigits = parseFloat(stringNumber.split(".")[0]);
      const decimalDigits = stringNumber.split(".")[1];
  
      let integerDisplay;
  
      if (isNaN(integerDigits)) {
        integerDisplay = "";
      } else {
        integerDisplay = integerDigits.toLocaleString("en", {
          maximumFractionDigits: 0,
        });
      }
  
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
      } else {
        return integerDisplay;
      }
    }
  

    calculate() {
      let result;
  
      const _previousOperand = parseFloat(this.previousOperand);
      const _currentOperand = parseFloat(this.currentOperand);
  
      if (isNaN(_previousOperand) || isNaN(_currentOperand)) return;
  
      switch (this.operation) {
        case "+":
          result = _previousOperand + _currentOperand;
          break;
        case "-":
          result = _previousOperand - _currentOperand;
          break;
        case "÷":
          result = _previousOperand / _currentOperand;
          break;
        case "X":
          result = _previousOperand *_currentOperand;
          break;
        default:
          return;
      }
  
      this.currentOperand = result;
      this.operation = undefined;
      this.previousOperand = "";
    }
  
    chooseOperation(operation) {
      if (this.currentOperand === "") return;
  
      if (this.previousOperand !== "") {
        this.calculate();
      }
  
      this.operation = operation;
  
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }
  
    appendNumber(number) {
      if (this.currentOperand.includes(".") && number === ".") return;
  
      this.currentOperand = `${this.currentOperand}${number.toString()}`;
    }
  
    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = undefined;
    }
  
    updateDisplay() {
      this.previousOperandText.innerText = `${this.formatDisplayNumber(
        this.previousOperand
      )} ${this.operation || ""}`;
      this.currentOperandText.innerText = this.formatDisplayNumber(
        this.currentOperand
      );
    }
  }
  
  const calculator = new Calculator(
    previousOperandText,
    currentOperandText
  );
  
  for (const numberButton of numbers) {
    numberButton.addEventListener("click", () => {
      calculator.appendNumber(numberButton.innerText);
      calculator.updateDisplay();
    });
  }
  
  for (const operationButton of operands) {
    operationButton.addEventListener("click", () => {
      calculator.chooseOperation(operationButton.innerText);
      calculator.updateDisplay();
    });
  }
  
  allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
  });
  
  equals.addEventListener("click", () => {
    calculator.calculate();
    calculator.updateDisplay();
  });
  
 