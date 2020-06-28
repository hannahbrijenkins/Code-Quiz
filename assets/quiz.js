/*
-Make start button start working, by prompting first question (function)
-when answer is clicked:
+JS will determine if the option they clicked was true or false
+message is displayed, letting player know if their answer was correct or not (for a limited time)
+IF wrong, time will be reduced, and points will be deducted
+IF correct, points will be added to score
+Whenever answer is clicked, next question is displayed
*/
const startButton = document.getElementById('start-btn-id')
const startContainer =document.getElementById('start-btn-container')
const questionContainer = document.getElementById('quiz')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-buttons')

startButton.addEventListener("click", startGame)

function startGame() {
    // debugger;
    console.log("game has started")
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion(question) {
    questionElement.innerText = questions["question"];
}

function selectAnswer() {

}

//this is an array of questions
const questions = [
    {
        question: "What is 2+2",
        answers: [
            { text: "4", correct: true },
            { text: "22", correct: false },
            { text: "45", correct: false },
            { text: "11", correct: false },
        ]
    }

]