const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = '';
let correctAnswer = '';
let candidateAnswer = '';
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your Name: ");
 }

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  question = "Who was the first American woman in space? "
  correctAnswer = "Sally Ride";
  console.log(question);
  candidateAnswer = input.question("Your Answer: ");
 }

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  console.log("Correct Answer: " + correctAnswer);
  console.log();
  if (candidateAnswer === correctAnswer) {
    console.log("Your answer is correct.")
    grade += 1;
  } else {
    console.log("Your answer is incorrect.")
  }
  console.log("Score: " + grade + " out of 1.");
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("\nHello " + candidateName + "!");
  console.log("WELCOME TO ASTRONAUT TRAINING PROGRAM QUIZ");
  console.log("\nPlease provide answers to the below questions:\n"); 
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};