const questions = [
  {
    question:
      "What 1978 horror classic features babysitters being stalked by an escaped mental patient?",
    answers: [
      { text: "Halloween", correct: true },
      { text: "Jason", correct: false },
      { text: "Chainsaw Massacre", correct: false },
      { text: "IT", correct: false },
    ],
  },
  {
    question:
      "Which horror movie is known for the iconic line “Heeere’s Johnny!” as a crazed maniac breaks through a door?",
    answers: [
      { text: "Pet Semetary", correct: false },
      { text: "IT", correct: false },
      { text: "The Shining", correct: true },
      { text: "Scream", correct: false },
    ],
  },
  {
    question:
      "In “The Conjuring,” what is the possessed doll that serves as a conduit for malevolent spirits??",
    answers: [
      { text: "Minny", correct: false },
      { text: "Barbera", correct: false },
      { text: "Stacy", correct: false },
      { text: "Annabelle", correct: true },
    ],
  },
  {
    question:
      "What 2014 horror movie features a widowed mother and her son who are terrorized by supernatural forces in their home?",
    answers: [
      { text: "The Imaginary", correct: false },
      { text: "Hereditary", correct: false },
      { text: "Sinister", correct: false },
      { text: "The Babadook", correct: true },
    ],
  },
  {
    question: "Come on, it's just a bunch of hocus pocus. Says who?",
    answers: [
      { text: "Allison", correct: false },
      { text: "Max", correct: true },
      { text: "Sarash", correct: false },
      { text: "Dani", correct: false },
    ],
  },
  {
    question:
      "Which birthday does Marnie (halloweentown) celebrate during the film?",
    answers: [
      { text: "Her 14th", correct: false },
      { text: "Her 15th", correct: false },
      { text: "Her 13th", correct: true },
      { text: "Her 12th", correct: false },
    ],
  },

  {
    question: "What year did Halloweentown come out?",
    answers: [
      { text: "1998", correct: true },
      { text: "2001", correct: false },
      { text: "1996", correct: false },
      { text: "2000", correct: false },
    ],
  },

  {
    question: "What kind of allergy does Charlie have in Hereditary?",
    answers: [
      { text: "nut", correct: true },
      { text: "milk", correct: false },
      { text: "eggs", correct: false },
      { text: "shellfish", correct: false },
    ],
  },

  {
    question: "What year was the first Saw movie released?",
    answers: [
      { text: "2001", correct: false },
      { text: "2008", correct: false },
      { text: "2004", correct: true },
      { text: "1999", correct: false },
    ],
  },

  {
    question: "What year was the first Saw movie released?",
    answers: [
      { text: "2001", correct: false },
      { text: "2008", correct: false },
      { text: "2004", correct: true },
      { text: "1999", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}



function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
}else{
    showScore();
}

}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();
