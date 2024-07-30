console.log("Loops");
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// Types of Loops
// 1. for loop
// 2. while loop
// 3. do while loop

// 1. FOR LOOP

// FOR INITIALIZATION; CONDITION; INCREMENT/DECREMENT
// for (let i = 0; i <= 1000; i++) {
//   console.log(i);
//   if (i === 404) {
//     break;
//   }
//   // continue;
//   //   break;
// }

// let j;

// for (let j = 0; j <= 50; j++) {
//   if (j >= 40 && j <= 49) {
//     continue;
//   }
//   console.log(j);
// }

// While Loop
// let i = 11; // initialization
// while (i <= 10) {
//   // condition
//   console.log(i);
//   i++; // increment
// }

// Do While Loop
// let k = 11; // initialization
// do {
//   console.log(k);
//   k++; //increment
// } while (k <= 10); //condition

// Decrement for loop
// for (let i = 100; i >= 0; i -= 5) {
//   console.log(i);
// }

// Decrement while loop
// let l = 100;
// while (l >= 0) {
//   console.log(l);
//   l -= 10;
// }

// Decrement do while loop
// let m = 100;
// do {
//   console.log(m);
//   m -= 10;
// } while (m >= 0);

let cardContainer = document.getElementById("cards");

{
  /* <div class="card">
        <h2>Card 1</h2>
        <p>Card 1 content</p>
      </div> */
}

let name = "Bolarinwa";
let sentence = "Welcome " + name + " to the class";
let sentenceTwo = `Welcome ${name} to the class`;
console.log(sentence);
console.log(sentenceTwo);

for (let i = 1; i <= 10; i++) {
  cardContainer.innerHTML += `<div class="card">
  <img src="./fineavatarImage.jpeg" alt="Fine Avatar"/>
        <h2>Card ${i}</h2>
        <p>Card ${i} content</p>
      </div> `;
}

let userOne = document.getElementById("userOne");

userOne.innerText = "Hello world!!!";
userOne.style.backgroundColor = "red";
userOne.style.color = "#FFFFFF";
