console.log("Welcome to conditionals");

// Conditionals
// Simple If Statement
// If else statement
// Compound If Statement
// Nested if statement
// Switch statement

// Simple If Statement
let age = 18;
if (age >= 18) {
  console.log("You can vote in Nigeria!!");
}

// If else statement
if (age >= 18) {
  console.log("You can vote in Nigeria!!!");
} else {
  console.log("You are not eligible to vote in Nigeria");
}

// Compound If Statement
let country = "Ghana";
if (age >= 18 && country === "Nigeria") {
  console.log("You can vote in Nigeria!!!");
} else if (age >= 18 && country === "Ghana") {
  console.log("You can vote in Ghana!!!");
} else if (age >= 18 && country === "USA") {
  console.log("You can vote in USA!!!");
} else {
  console.log("You are not eligible to vote");
}

// Nested If Statement
// SQI College of ICT Admission criteria
// You need a jamp score of 180 or more
// You need to be 18 or older
// You need to have a minimum of 5 credits in your WAEC or NECO
// You need to have picked SQI as your college of choice
// If you have a jamb score of 180 but you are less than 18 years old, you are not eligible by age
// If you have a jamb score of 180 but you have less than 5 credits in your WAEC or NECO, you are not eligible by result
// If you have a jamb score of 180 but you did not pick SQI as your college of choice, you are not eligible by choice
let jambScore = 180;
let personAge = 19;
let numberOfCredits = 7;
let choosedSQI = true;

if (choosedSQI) {
  if (personAge >= 18) {
    if (jambScore >= 180 && numberOfCredits >= 5) {
      console.log("You are eligible to study at SQI College of ICT");
    } else {
      console.log("You are not eligible because of your exams result");
    }
  } else {
    console.log("You are not eligible because you are too young");
  }
} else {
  console.log("You are not eligible bacause you did not choose SQi");
}

// Switch Statements
const amount = 300;
switch (amount) {
  case 100:
    console.log("You are buying 100 recharge card");
    break;
  case 200:
    console.log("You are buying 200 recharge card");
    break;
  case 300:
    console.log("You are buying 300 recharge card");
    break;
  default:
    console.log("Alaye Go front");
}
