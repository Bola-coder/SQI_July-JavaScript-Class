console.log("Hello Arrays Agains");

// Looping through arrays
let cars = ["Audi", "Bentely", "Porshe", "Ferrari", "Lexus"];

const carsLength = cars.length;

for (let i = 0; i < carsLength; i++) {
  console.log(`I have ${cars[i]} in my compound!!!`);
}

let i = 0;
while (i < cars.length) {
  console.log(`I love ${cars[i]}`);
  i++;
}

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");

for (i in cars) {
  console.log(cars[i]);
}

// Array methods used for iteration
const carFunction = (car) => {
  console.log(car);
};

carFunction("Buggati");

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");

// 1. The foreach method
cars.forEach((car) => {
  console.log(car);
  console.log("I love this car: ", car);
});

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("Mapping through the cars in the array");
// 2. The map method
cars.map((car) => {
  console.log(car);
});

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = [];
numbers.map((number) => {
  squaredNumbers.push(number * number);
});

console.log(numbers);
console.log(squaredNumbers);

// 3. Filter Method
const persons = [
  "Abolarinwa",
  "Jinadu",
  "Elesho",
  "Apel",
  "Bankole",
  "Joshua",
  "Abraham",
  "Jide",
  "Kosoko",
  "Agunbiade",
];

for (let i = 0; i < persons.length; i++) {
  //   console.log(persons[i]);
  if (persons[i].startsWith("A")) {
    console.log(persons[i]);
  }
}

// using the filter method
const personsWithNameStartingWithA = persons.filter((person) =>
  person.startsWith("A")
);
console.log(personsWithNameStartingWithA);

// 4. Every method
const everyNameStartsWithA = persons.every((person) => person.startsWith("A"));
console.log(everyNameStartsWithA);

// 5. Some method
const someNamesStartWithA = persons.some((person) => person.startsWith("A"));

console.log(someNamesStartWithA);

// 6. Find method
const firstPersonThatNameStartsWithA = persons.find((person) =>
  person.startsWith("D")
);

console.log(firstPersonThatNameStartsWithA);

// 7. FindIndex method
const indexOfFirstPersonWithNameStartingWithA = persons.findIndex((person) =>
  person.startsWith("D")
);

console.log(indexOfFirstPersonWithNameStartingWithA);

// Products Listing
const products = [
  "iPhone 11",
  "iPhone 11 pro",
  "iPhone 11 pro max",
  "iPhone 12",
  "iPhone 12 pro",
  "iPhone 12 pro max",
  "iPhone 13",
  "iPhone 13 pro",
  "iPhone 13 pro max",
];
const productList = document.getElementById("products");

console.log(productList);

products.forEach((product) => {
  productList.innerHTML += `
    <div class="product">
        <h2>${product}</h2>
        <p>$${1000}</p>
        <button>Buy Now</button>
      </div>
    `;
});

// Assignment
/*
    Your task is to create an array of students (at least 10). You should have a div with an id of students in your html file.
    1. You are required to display all the students in the array in your html output. 
    2. You are also required to do the following:
    a. Check for the students whose name is at least 8 characters long
    b. Check if all the students names is at least 8 characters long. Return true if the condition is satisfied, else return false.
    c. Retrun true if at least one of he students has a name with at least 8 character long
    NOTE: You are mandated to use array methods for all of this and not traditional loops
*/
