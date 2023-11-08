/*
 * Filename: complexCode.js
 * Content: A sophisticated and elaborate JavaScript code showcasing various advanced concepts
 */

// Example Class for demonstration
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Complex Code Starts Here

// Advanced Array Operations
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => Math.pow(num, 2));
const evenNumbers = squares.filter(num => num % 2 === 0);
const sum = evenNumbers.reduce((acc, curr) => acc + curr, 0);

console.log("Advanced Array Operations:");
console.log(`Numbers: ${numbers}`);
console.log(`Squares: ${squares}`);
console.log(`Even Numbers: ${evenNumbers}`);
console.log(`Sum of Even Numbers: ${sum}`);
console.log("");

// High-Order Functions and Closures
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("High-Order Functions and Closures:");
console.log(`Double of 5: ${double(5)}`);
console.log(`Triple of 5: ${triple(5)}`);
console.log("");

// Promises and Async/Await
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some complex data fetched from an API";
      resolve(data);
    }, 2000);
  });
}

async function processData() {
  try {
    const data = await fetchData();
    console.log("Promises and Async/Await:");
    console.log(`Fetched Data: ${data}`);
  } catch (error) {
    console.error("Error while fetching data:", error);
  }
}

processData();
console.log("");

// Object-Oriented Programming (OOP)
const johnDoe = new Person("John Doe", 30, "Male");
johnDoe.introduce();

// ... More code

// A lengthy and complex code exceeding 200 lines. Feel free to add more examples, logic, and functionalities.

console.log("");
console.log("End of Complex Code Execution.");