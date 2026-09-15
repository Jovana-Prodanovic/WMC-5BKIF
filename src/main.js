// ========================================
// Strings – E1: String Concatenation
// ========================================


const name = "Jovana";
const messageConcatenation="Hello , my name is " + name  +".";

  console.log(messageConcatenation);


// Strings – E2: Template Literal
// ========================================


const messageTemplateLiteral = `Hello, my name is ${name}.`;
console.log(messageTemplateLiteral);



// Strings – E3: Exotic Language
// ========================================

const exoticText = "こんにちは";

console.log(exoticText);
console.log(exoticText.length);


// Functions E1: Greet Function
// ========================================

function greet(name) {
  if (typeof name !== "string") {
    return null;
  }

  return `Hello, ${name}!`;
}

console.log(greet("John"));
console.log(greet(25));

// Functions E2: Add Function
// ========================================

function add(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return null;
  }

  return number1 + number2;
}

console.log(add(5, 3));
console.log(add("5", "3"));

// Functions E3: Subtract Function
// ========================================

function subtract(number1, number2) {
  if (typeof number1 !== "number" || typeof number2 !== "number") {
    return null;
  }

  return number1 - number2;
}

console.log(subtract(5, 3));
console.log(subtract("5", "3"));







