console.log("Welcome to Arrays!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

const cars = ["Audi", "BMW", "Lexus", "Hyundai", "Benz", "Toyota"];

console.log(cars);
console.log(typeof cars);

const numbers = new Array(1, 2, 3, 4, 5);
console.log(numbers);

// Accessing Array elements
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);

// Changing array element
cars[5] = "Chevrolet";

console.log(cars);

// Adding elements to an array
cars.push("Tesla");
console.log(cars);

cars.push("Ford");
console.log(cars);

// Removing element from an array

cars.pop();
console.log(cars);

// Shifting and Unshifting
cars.unshift("Range Rover Velar");
console.log(cars);

cars.unshift("Volkswagen");
console.log(cars);

cars.shift();
console.log(cars);

// Removing an element using its index
cars.splice(4, 2);
console.log(cars);

const mainCars = cars.slice(1, 4);
console.log(mainCars);

let myScores = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
console.log(myScores.fill(90, 0, 15));
// console.log(myScores);

// Reverese an array
console.log(cars);
console.log(cars.reverse());

// Assignment
// Create
