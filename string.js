console.log("Welcome to Strings");

const myString = "Hello World";
console.log(myString);

let myIntroduction = `My mame is Bolarinwa and I am a software developer`;

// String methods
//  1. length
let myStringLength = myString.length;
console.log(myStringLength);

console.log(myIntroduction.length);

// 2. Char at
console.log(myString.charAt(0));
console.log(myString.charAt(1));
console.log(myString.charAt(5));

// 3. COmparing String
let a = "abakaliki";
let b = "AbaKaliki";

if (a === b) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

// 4. Changing string case

console.log(a.toUpperCase());
console.log(b.toUpperCase());

console.log(a.toLowerCase());
console.log(b.toLowerCase());

if (a.toLowerCase() === b.toLowerCase()) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}

// 5. Concatenation
let firstname = "Bolarinwa";
let lastname = "Ahmed   ";

let fullname = firstname + " " + lastname;
console.log(fullname);

let anotherFullname = `${firstname} ${lastname}`;
console.log(anotherFullname);

let concatFullname = firstname.concat(" ", lastname);
console.log(concatFullname);

// 6. Includes
let myNewString = "Hello World";
let myNewSentence = "Hello World, i am a software developer and i love coding";

console.log(myNewSentence.includes(myNewString));

// 7. Replace
let replacedSentence = myNewSentence.replace("Hello", "Hi");

console.log(myNewSentence);
console.log(replacedSentence);

// 8. Slicing a string
let mySlicedString = myNewSentence.slice(13, 100);
console.log(mySlicedString);

// 9. StartsWith
let color = "indigo";
if (color.toUpperCase().startsWith("I")) {
  console.log("The color starts withs I");
} else {
  console.log("The color doesn't start with I");
}

let whiteSpacedString = "    Hello World    ";
console.log(whiteSpacedString.length);
console.log(whiteSpacedString.trim());
console.log(whiteSpacedString.trim().length);
