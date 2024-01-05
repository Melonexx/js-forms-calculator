console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Holen Sie die Werte der Eingabefelder
  const numberA = parseFloat(document.querySelector('[name="numberA"]').value);
  const numberB = parseFloat(document.querySelector('[name="numberB"]').value);

  // Holen Sie den ausgewählten Operator
  const operatorInput = document.querySelector(
    'input[name="operator"]:checked'
  );
  const operator = operatorInput ? operatorInput.value : null;

  let result;

  // Überprüfen Sie, welcher Operator ausgewählt wurde
  if (operator === "addition") {
    result = add(numberA, numberB);
  } else if (operator === "subtraction") {
    result = subtract(numberA, numberB);
  } else if (operator === "multiplication") {
    result = multiply(numberA, numberB);
  } else if (operator === "division") {
    // Überprüfen Sie, ob der Divisor nicht 0 ist, um eine Division durch 0 zu vermeiden
    result = numberB !== 0 ? divide(numberA, numberB) : "Cannot divide by zero";
  } else {
    result = "Invalid operator";
  }

  // Ergebnis zuweisen
  resultOutput.textContent = result;
});
