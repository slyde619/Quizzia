const startQuizBtn = document.querySelector("#startBtn");
const quizRules = document.querySelector("#rules");
const exitBtn = document.querySelector("#exitBtn");
const continueBtn = document.querySelector("#continueBtn");
const quizApp = document.querySelector("#quizapp");
const answerOptions = document.querySelector(".answer-options");
const totalLengthOfQuestions = document.querySelector(
  "#totalLengthOfQuestions"
);
const questionContainer = document.querySelector("#question");
const nextBtn = document.querySelector("#nextBtn");
const questionText = document.querySelector(".question-text h3");
const usedIndexes = new Set(); // A Set to store used question indexes
const timeInSec = document.querySelector(".time-in-sec");
const resultUI = document.querySelector("#resultContainer");
const replayBtn = document.querySelector("#replayBtn");
const resultCard = document.querySelector(".result-card");
let currentQuestion = document.querySelector("#currentQuestion");
let questionCounter = 0;
let currentQuestionIndex = null;
let explanation = document.createElement("p");
let timeCounter;
let countDownTimer = 15;
let userScore = 0;

// Start Btn Displays Quiz Rules
startQuizBtn.addEventListener("click", () => {
  showQuizRules();
  startQuizBtn.style.display = "none";
});

// Displays rules of the quiz
function showQuizRules() {
  quizRules.style.display = "block";
}

function hideQuizRules() {
  quizRules.style.display = "none";
}

// Shows landing page
function showHomePage() {
  window.location.href = "./index.html";
}

// Displays the quiz UI
function showQuiz() {
  quizApp.style.display = "block";
  let randomNumber = randomGenerator();
  showQuestion(randomNumber);
  startTimer(countDownTimer);
}

// Exit returns you to landing page
exitBtn.addEventListener("click", showHomePage);

continueBtn.addEventListener("click", () => {
  hideQuizRules();
  showQuiz();
  startTimer(countDownTimer);
});

nextBtn.addEventListener("click", () => {
  let randomNumber = randomGenerator(); // Generate a new unique question index

  if (nextBtn.textContent === "Submit") {
    showResults(); // Call function to show the result screen
    return;
  }

  if (randomNumber !== null) {
    showQuestion(randomNumber);
    explanation.textContent = "";
    // clearTimer and restart timer
    startTimer(countDownTimer);

    // Check if it's the last question
    if (usedIndexes.size === javascriptQuestions.length) {
      nextBtn.textContent = "Submit"; // Change button text to "Submit"
    }
  } else {
    console.log("All Questions have been answered");
  }
});

function showQuestion(randomNumber) {
  if (randomNumber === null) {
    return;
  }
  questionCounter++;

  currentQuestionIndex = randomNumber;

  questionText.textContent = `${questionCounter}. ${javascriptQuestions[randomNumber].question}`;

  currentQuestion.innerHTML = questionCounter;
  totalLengthOfQuestions.innerHTML = javascriptQuestions.length;

  // Hide Next Button Initially
  nextBtn.style.display = "none";

  // Clear previous options before adding new ones
  answerOptions.innerHTML = "";

  // Loop through each options and display them
  let options = javascriptQuestions[randomNumber].options;
  options.forEach((option) => {
    answerOptions.innerHTML += `<p class="option-item">${option}</p>`;
  });

  answerOptions.querySelectorAll(".option-item").forEach((option) => {
    option.addEventListener("click", function () {
      selectedOption(this);
      
      // Remove 'selected' class from all options before adding it to the clicked one
      document.querySelectorAll(".option-item").forEach((item) => {
        item.classList.remove("selected");
      });

      // Add selected css classes to indicate selected option
      option.classList.add("selected");
      
      // Disable all options once an option is clicked
      const allOptions = [...answerOptions.children];
      allOptions.forEach((item) => {
        item.classList.add("disabled");
      });
    });
  });
}

// Collect user's answer with the correct answer
function selectedOption(answer) {
  clearInterval(timeCounter);
  let userAnswer = answer.textContent;
  let correctAnswer = javascriptQuestions[currentQuestionIndex].answer;

  explanation.textContent = `Answer: ${correctAnswer}`;
  questionContainer.appendChild(explanation);
  explanation.classList.add("explanation");

  if (userAnswer !== correctAnswer) {
    // console.log("InCorrect");
  } else {
    // console.log("correct");
    userScore += 1;
  }

  // Show Next Button Only After Selecting an Answer
  nextBtn.style.display = "block";
}

// Random number generator
function randomGenerator() {
  if (usedIndexes.size === javascriptQuestions.length) {
    usedIndexes.clear(); //Resets the quiz for next round
    questionCounter = 0;
    return;
  }

  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * javascriptQuestions.length);
  } while (usedIndexes.has(randomNumber));

  usedIndexes.add(randomNumber); //Stores used number/index
  return randomNumber;
}

function startTimer(time) {
  // Ensure there is no timer running
  clearInterval(timeCounter);

  timeCounter = setInterval(() => {
    if (time <= 0) {
      clearInterval(timeCounter); //Stops timer when it reaches 0

      // Automatically trigger next question
      // Automatically get the next question
      let randomNumber = randomGenerator();
      if (randomNumber !== null) {
        showQuestion(randomNumber);
        startTimer(countDownTimer); // Restart timer for new question
      } else {
        console.log("All Questions have been answered");
      }
      return;
    }
    // Format time with leading zero if < 10
    timeInSec.textContent = `${String(time).padStart(2, "0")}s`;
    time--;
  }, 1000);
}

// Work on this soon...
function showResults() {
  resultCard.innerHTML = "";
  quizApp.style.display = "none"; // Hide quiz UI
  resultUI.style.display = "block"; // Show results UI
  let totalQuestions = javascriptQuestions.length;

  if (userScore >= 45) {
    let scoreTag = `<div class="resultInfo">
        <h4 class="quizScore">Congrats! you scored ${userScore} / ${totalQuestions}</h4>
        <p class="remark">Keep Learning!!!</p>
      </div>`;
    resultCard.innerHTML = scoreTag;
  } else if (userScore >= 30 && userScore <= 44) {
    let scoreTag = `
      <div class="resultInfo">
        <h4 class="quizScore">Nice! you scored ${userScore} / ${totalQuestions}</h4>
        <p class="remark">Deep more into learning more about JavaScript!</p>
      </div>
      `;
    resultCard.innerHTML = scoreTag;
  } else {
    let scoreTag = `
      <div class="resultInfo">
        <h4 class="quizScore">Sorry! you scored ${userScore} / ${totalQuestions}</h4>
        <p class="remark">Check out more resources on JS and keep praticing!</p>
      </div>
      `;
    resultCard.innerHTML = scoreTag;
  }
}

const homeBtn = document.querySelector("#homeBtn");

// Go to homepage
homeBtn.addEventListener("click", () => {
  window.location.href = "././index.html";
});

// Replay Button
replayBtn.addEventListener("click", replayQuiz);

// Reloads the quiz page to start again
function replayQuiz() {
  resultUI.style.display = "none";
  window.location.reload();
}
