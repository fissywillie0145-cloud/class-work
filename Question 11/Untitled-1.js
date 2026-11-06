import { add, subtract, multiply, divide } from "./math.js";

// Get numbers from the HTML inputs
function getNumbers() {
  let num1 = Number(document.getElementById("num1").value);

  let num2 = Number(document.getElementById("num2").value);

  return { num1, num2 };
}

// Addition
function addNumbers() {
  let { num1, num2 } = getNumbers();

  let result = add(num1, num2);

  document.getElementById("result").textContent = "Addition Result: " + result;
}

// Subtraction
function subtractNumbers() {
  let { num1, num2 } = getNumbers();

  let result = subtract(num1, num2);

  document.getElementById("result").textContent =
    "Subtraction Result: " + result;
}

// Multiplication
function multiplyNumbers() {
  let { num1, num2 } = getNumbers();

  let result = multiply(num1, num2);

  document.getElementById("result").textContent =
    "Multiplication Result: " + result;
}

// Division
function divideNumbers() {
  let { num1, num2 } = getNumbers();

  try {
    let result = divide(num1, num2);

    document.getElementById("result").textContent =
      "Division Result: " + result;
  } catch (error) {
    document.getElementById("result").textContent = error.message;
  }
}

// Make functions available to HTML buttons
window.addNumbers = addNumbers;
window.subtractNumbers = subtractNumbers;
window.multiplyNumbers = multiplyNumbers;
window.divideNumbers = divideNumbers;
