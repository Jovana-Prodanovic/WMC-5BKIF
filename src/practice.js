// Functions E4: Calculate Function
// ========================================

function calculate(number1, number2, operation) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return null;
  }

  switch (operation) {
    case "add":
      return number1 + number2;

    case "subtract":
      return number1 - number2;

    case "multiply":
      return number1 * number2;

    case "divide":
      return number1 / number2;

    default:
      return null;
  }
}


// E4 Tests
console.log(calculate(5, 3, "add"));
console.log(calculate(5, 3, "subtract"));
console.log(calculate(5, 3, "multiply"));
console.log(calculate(5, 3, "divide"));
console.log(calculate(5, 3, "modulus"));


// Functions E6: Get Number From User with Loop
// ========================================

// E6 je poboljšana verzija E5.
// Zato ovdje imamo samo JEDNU getNumberFromUser funkciju.
function getNumberFromUser() {
  while (true) {
    const input = prompt("Bitte gib eine Zahl ein:");
    const number = Number(input);

    if (!Number.isNaN(number)) {
      return number;
    }
  }
}


// Functions E7: Simple Calculator
// ========================================

function calculator() {
  while (true) {
    const operation = prompt(
      "Wähle eine Operation: add, subtract, multiply, divide oder exit:"
    );

    if (operation === "exit") {
      break;
    }

    const number1 = getNumberFromUser();
    const number2 = getNumberFromUser();

    const result = calculate(number1, number2, operation);

    console.log(result);
  }
}


// Start the calculator
calculator();
