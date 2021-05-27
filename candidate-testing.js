const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = '';
let correctAnswer = '';
let candidateAnswer = '';
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your Name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  questions[0] = "Who was the first American woman in space? "
  questions[1] = "True or false: 5 kilometer == 5000 meters? "
  questions[2] = "(5 + 3)/2 * 10 = ? "
  questions[3] = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? "
  questions[4] = "What is the minimum crew size for the ISS? "

  correctAnswers[0] = "Sally Ride";
  correctAnswers[1] = "true";
  correctAnswers[2] = "40";
  correctAnswers[3] = "Trajectory";
  correctAnswers[4] = "3";

  for (let i = 0; i <= 4; i++) {
    console.log(questions[i]);
    candidateAnswers[i] = input.question("Your Answer: ");
    console.log("Correct Answer: " + correctAnswers[i]);
    console.log();
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  let correctCount = 0;
  for (let i = 0; i <= 4; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correctCount += 1;
    }
  }
  grade = correctCount / 5 * 100;
  console.log(`>>> Overall Grade: ${grade}% (${correctCount} of 5 responses correct) <<<`);
  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<")
  } else {
    console.log(">>> Status: FAILED <<<")
  }
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("\nHello " + candidateName + "!");
  console.log("\nWELCOME TO ASTRONAUT TRAINING PROGRAM QUIZ");
  console.log("Please provide answers to the below questions:\n");
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