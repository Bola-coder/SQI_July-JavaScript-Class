// Functions
// A function is a reusable code block

// Creating(instantiation) the function
function sayGreetings() {
  console.log("Welcome to Javascript functions!!!");
}

// Invoking the functions
// sayGreetings();
// let myName = "Titilayo";

// function sayHello(name) {
//   // name is a function parameter
//   console.log(myName);
//   console.log("Hello, welcome " + name);
// }

// sayHello("Bolarinwa"); // Bolarinwa is a function argument
// sayHello("Jinadu"); // Jinadu is a function argument
// sayHello("Elesho"); // Elesho is a function argument
// sayHello(myName);

// Creating a simple calculator

// let numbOne = Number(prompt("Enter the first number"));
// let numbTwo = Number(prompt("Enter the second number"));

function add(a, b) {
  console.log(a + b);
}

function subtract(a, b) {
  if (a > b) {
    console.log(a - b);
  } else {
    console.log(b - a);
  }
}

function mutiply(a, b) {
  console.log(a * b);
}

function division(a, b) {
  if (a > b) {
    console.log(a / b);
  } else {
    console.log(b / a);
  }
}

// Addition
// console.log("Number one is: ", numbOne);
// console.log("Number two is", numbTwo);
// console.log("Adding the 2 numbers");
// add(numbOne, numbTwo);
// console.log("Subtracting the 2 numbers");
// subtract(numbOne, numbTwo);
// console.log("Multiplying the 2 numbers");
// mutiply(numbOne, numbTwo);
// console.log("Dividing the 2 numbers");
// division(numbOne, numbTwo);

function addWithReturn(a, b) {
  let sum = a + b;
  return sum;
}

function subtractWithReturn(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

function mutiplyWithReturn(a, b) {
  return a * b;
}

function divisionWithReturn(a, b) {
  if (a > b) {
    return a / b;
  } else {
    return b / a;
  }
}

// const sumOfTheTwoNumbers = addWithReturn(numbOne, numbTwo);
// console.log(addWithReturn(numbOne, numbTwo));

function calculateArea(radius) {
  return 3.142 * radius ** 2;
}

let userOneRadius = 5;
let userOneName = "Jinadu";
let userTwoRadius = 7;
let userTwoName = "Elseho";

console.log(
  "The are of the circle for " +
    userOneName +
    " is " +
    calculateArea(userOneRadius)
);

console.log(
  "The are of the circle for " +
    userTwoName +
    " is " +
    calculateArea(userTwoRadius)
);

// let userOne = document.getElementById("userOne");
// let userTwo = document.getElementById("userTwo");

// userOne.innerHTML =
//   "The area of the circle for " +
//   userOneName +
//   " is " +
//   calculateArea(userOneRadius);

// userTwo.innerHTML =
//   "The area of the circle for " +
//   userTwoName +
//   " is " +
//   calculateArea(userTwoRadius);

// Assignment Question
// Write a function checkDiscount that takes a customer's age and membership status (as a boolean, true for member, false for non-member) and returns the discount percentage they are eligible for. The discount rules are as follows:
// Customers under 18 get a 10% discount.
// Customers who are 65 or older get a 15% discount.
// Members (regardless of age) get an additional 5% discount.
// For example:

// A 17-year-old member should get a 15% discount (10% + 5%).
// A 70-year-old non-member should get a 15% discount.
// A 70-year-old member should get a 20% discount (15% + 5%).
