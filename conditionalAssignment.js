// Scenario:
// You are developing a complex grading system for a university. The system needs to determine a student's final grade based on their scores in assignments, exams, and participation, as well as their overall attendance. The grading system also considers late submissions and extra credit. The criteria for determining the final grade are as follows:

// Scores:

// Assignments contribute 40% of the final grade.
// Exams contribute 50% of the final grade.
// Participation contributes 10% of the final grade.
// Attendance:

// If attendance is 90% or above, there is no penalty.
// If attendance is between 75% and 89%, the final grade is reduced by 5%.
// If attendance is below 75%, the final grade is reduced by 10%.
// Late Submissions:

// If there are no late submissions, no penalty is applied.
// If there are 1-2 late submissions, the assignment score is reduced by 5%.
// If there are more than 2 late submissions, the assignment score is reduced by 10%.
// Extra Credit:

// If extra credit is completed, 5% is added to the final grade.
// Grading Scale:

// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

let assignmentScore = 80;
let examScore = 75;
let particpationScore = 90;
let attendance = 85;
let numberOfLateSubmissions = 3;
let extraCredit = true;

let finalGrade = 0;
let assignmentGrade = assignmentScore * 0.4;
let examGrade = examScore * 0.5;
let participationGrade = particpationScore * 0.1;
let penalty = null;

if (attendance >= 90) {
  penalty = 0;
  console.log("You have no penalty for attendance");
} else if (attendance >= 75 && attendance <= 89) {
  penalty += 5;
  console.log("Your final grade has been reduced by 5% because of attendances");
} else {
  penalty += 10;
  console.log(
    "Your final grade has been reduced by 10% because of attendances"
  );
}

if (numberOfLateSubmissions === 0) {
  penalty += 0;
  console.log("You have no penalty for late submission");
} else if (1 <= numberOfLateSubmissions <= 2) {
  penalty += 5;
  console.log(
    "Your final grade has been reduced by 5% because of late submission"
  );
} else {
  penalty += 10;
  console.log(
    "Your final grade has been reduced by 10% because of late submissions"
  );
}

if (extraCredit) {
  penalty -= 5;
}

finalGrade = assignmentGrade + examGrade + participationGrade;
finalGrade -= penalty;
console.log(finalGrade);
