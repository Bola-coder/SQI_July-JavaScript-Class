console.log("Hello World!!!");
// console.log(document);
const userOne = document.getElementById("userOne");
console.log(userOne);
userOne.innerHTML = "Welcome User One";

const userTwo = document.getElementById("userTwo");
userTwo.innerText = "Welcome User Two";

const card = document.getElementById("card");

card.innerHTML = "<h1>Okay, this is an h1 in a card</h1>";

card.innerHTML += "<p>This is a paragraph in a card</p>";

const priceInput = document.getElementById("price");

console.log(priceInput.value);

const headerThrees = document.querySelectorAll("h3");

console.log(headerThrees);
