import "./practice.js";

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

// Objects E1:Person Object
// ========================================

const person = {
  name: "Jovana" ,
  age: 29,
  isStudent: true
};

console.log(person);


// Objects E2 and E3: Game Object and Methods
// ========================================

const game = {
  playerName: "Jovana",
  score: 0,
  rank: 1,
  isAlive: true,

  updateScore(newScore) {
    this.score = newScore;
  },

  reset() {
    this.score = 0;
    this.rank = 1;
    this.isAlive = true;
  }
};

// Objects E2 Test 1: Log the game object
console.log(game);

// Objects E3 Test 1: Update the score and log the object
game.updateScore(150);
console.log(game);

// Objects E3 Test 2: Reset the game and log the object
game.reset();
console.log(game);

// Objects E4: Create Person Function
// ========================================

function createPerson(name, age) {
  if (typeof name !== "string" || typeof age !== "number") {
    return null;
  }

  return {
    name: name,
    age: age
  };
}

// Test 1: Valid values
console.log(createPerson("John", 25));

// Test 2: Invalid values
console.log(createPerson(25, "John"));



// Arrays E1
// ========================================

const numbers = [1, 2, 3, 4, 5];

console.log(numbers);


// Arrays E2 Add Number to the End
// ========================================

numbers.push(6);
console.log(numbers);

// Arrays E3 

 function sum(numbers){
  let total = 0;
  for (const number of numbers) {
    total  += number;
  }
  return total;

 }
 // Test 1:Numbers array
 console.log(sum(numbers));

 //Test 2:Empty array
 console.log(sum([]));

 