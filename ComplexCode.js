/* Filename: ComplexCode.js */

// Fibonacci Series Generator
function* fibonacci() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

// Infinite Fibonacci Series generator
let fibonacciSeries = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(fibonacciSeries.next().value);
}

// Custom EventEmitter class
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  emit(eventName, data) {
    const eventCallbacks = this.events[eventName];
    if (eventCallbacks) {
      eventCallbacks.forEach((callback) => {
        callback(data);
      });
    }
  }
}

// Example usage of EventEmitter class
const emitter = new EventEmitter();
emitter.on('message', (data) => {
  console.log(`Received message: ${data}`);
});
emitter.emit('message', 'Hello, World!');

// Asynchronous function with Promises
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncFunction() {
  console.log('Starting async function...');
  await delay(2000);
  console.log('Async function finished!');
}

asyncFunction();

// Map and Filter example
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
const even = doubled.filter((num) => num % 2 === 0);
console.log(even);

// Closure example
function outerFunction() {
  const outerVariable = 'I am from outer function';
  
  function innerFunction() {
    const innerVariable = 'I am from inner function';
    console.log(`${outerVariable}, and ${innerVariable}`);
  }
  
  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction();

// Custom Iterator example
class CustomIterator {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let value = this.start;
    return {
      next: () => {
        if (value <= this.end) {
          return { value: value++, done: false };
        }
        return { done: true };
      }
    };
  }
}

const customIterator = new CustomIterator(1, 5);
for (const num of customIterator) {
  console.log(num);
}

// Regular Expression example
const text = 'Hello, this is a sample text.';

const regex = /(\w+)/g;
const matches = text.match(regex);
console.log(matches);

// Web API example - Fetching data from API
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
  
/* Contents of this complex code:
1. Fibonacci Series Generator using a Generator function
2. Custom EventEmitter class for handling events
3. An asynchronous function using Promises
4. Example usage of Map and Filter array methods
5. Closure example, demonstrating nested functions
6. Custom Iterator example using Symbol.iterator
7. Regular Expression example for pattern matching
8. Web API example, fetching data from an API using fetch()
*/